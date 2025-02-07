import re

def escape_js_string(s):
    """Escape a string for JavaScript."""
    return s.replace("'", "\\'")

def format_currency(price_str):
    """Format currency using proper names with plurals."""
    if price_str is None or price_str == 'N/A':
        return None
        
    parts = price_str.split()
    if len(parts) != 2:
        return None
        
    amount, currency = parts
    
    # Convert to float to check if we need plural
    try:
        value = float(amount)
    except ValueError:
        return price_str
    
    # Currency names with their plural forms
    currency_names = {
        'GS': ('Sun', 'Suns'),
        'SM': ('Moon', 'Moons'),
        'BT': ('Terra', 'Terras'),
        'CB': ('Bit', 'Bits')
    }
    
    if currency in currency_names:
        singular, plural = currency_names[currency]
        proper_currency = plural if value > 1 else singular
        return f"{amount} {proper_currency}"
    return price_str

def parse_price(price_str):
    if price_str == 'N/A':
        return None
    parts = price_str.split()
    if len(parts) != 2:
        return None
    return format_currency(price_str)

def parse_markdown_file(content):
    # Split content into sections
    sections = re.split(r'# Section \d+:', content)[1:]  # Skip the currency system part
    
    price_data = {}
    current_section = None
    current_subsection = None
    
    for section in sections:
        # Get section name
        section_lines = section.strip().split('\n')
        section_name = section_lines[0].strip()
        
        section_data = {}
        
        # Process each line
        for line in section_lines[1:]:
            # Check for subsection
            if line.startswith('## '):
                current_subsection = line.replace('#', '').strip()
                section_data[current_subsection] = {}
                continue
                
            # Skip non-table lines and table headers
            if '|' not in line or '---' in line or 'Notes' in line:
                continue
                
            # Parse table row
            parts = [p.strip() for p in line.split('|')]
            if len(parts) < 8:  # Need item name + 6 quality levels + notes
                continue
                
            item_name = parts[1]
            if not item_name or item_name == 'Item Type' or item_name == 'Type':
                continue
                
            prices = {
                'Poor': parse_price(parts[2]),
                'Common': parse_price(parts[3]),
                'Good': parse_price(parts[4]),
                'Fine': parse_price(parts[5]),
                'Superior': parse_price(parts[6]),
                'Luxury': parse_price(parts[7])
            }
            
            if current_subsection and current_subsection in section_data:
                section_data[current_subsection][item_name] = {k: v for k, v in prices.items() if v is not None}
        
        if section_name and section_data:
            price_data[section_name] = section_data
            
    return price_data

def generate_js_code(price_data):
    """Convert the price data to JavaScript code."""
    js_lines = ['const priceData = {']
    
    for section, subsections in price_data.items():
        js_lines.append(f"    '{escape_js_string(section)}': {{")
        
        for subsection, items in subsections.items():
            js_lines.append(f"        '{escape_js_string(subsection)}': {{")
            
            for item, prices in items.items():
                js_lines.append(f"            '{escape_js_string(item)}': {{")
                price_strings = [f"'{quality}': '{price}'" for quality, price in prices.items()]
                js_lines.append('                ' + ', '.join(price_strings))
                js_lines.append('            },')
            
            js_lines.append('        },')
        
        js_lines.append('    },')
    
    js_lines.append('};')
    
    # Add currency conversion constants with plural forms
    js_lines.extend([
        '',
        'const CURRENCY = {',
        '    Sun: { value: 240, name: "Gold Sun", plural: "Gold Suns" },',
        '    Moon: { value: 12, name: "Silver Moon", plural: "Silver Moons" },',
        '    Terra: { value: 4, name: "Bronze Terra", plural: "Bronze Terras" },',
        '    Bit: { value: 1, name: "Copper Bit", plural: "Copper Bits" }',
        '};'
    ])
    
    return '\n'.join(js_lines)

# Example usage
if __name__ == "__main__":
    with open('price.md', 'r', encoding='utf-8') as file:
        content = file.read()
    
    price_data = parse_markdown_file(content)
    js_code = generate_js_code(price_data)
    
    # Write to a JavaScript file
    with open('price_data.js', 'w', encoding='utf-8') as file:
        file.write(js_code)

# Test the currency formatting with various amounts
test_data = {
    "Test Items": {
        "Sample Goods": {
            "Expensive Items": {"Common": "5 GS"},
            "Very Expensive Item": {"Common": "1 GS"},
            "Medium Items": {"Common": "3 SM"},
            "Single Medium Item": {"Common": "1 SM"},
            "Cheap Items": {"Common": "2 BT"},
            "Single Cheap Item": {"Common": "1 BT"},
            "Very Cheap Items": {"Common": "5 CB"},
            "Single Very Cheap Item": {"Common": "1 CB"}
        }
    }
}

print("Example of formatted output with plurals:")
print(generate_js_code(test_data))