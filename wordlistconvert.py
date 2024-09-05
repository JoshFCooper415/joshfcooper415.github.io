def process_word_list(input_file, output_file):
    with open(input_file, 'r') as f:
        words = [word.strip().lower() for word in f if 3 <= len(word.strip()) <= 5]

    words.sort()

    with open(output_file, 'w') as f:
        f.write("const dictionary = new Set([\n")
        for i, word in enumerate(words):
            if i == len(words) - 1:
                f.write(f'            "{word}"\n')
            else:
                f.write(f'            "{word}",\n')
        f.write("]);\n")

# Usage
input_file = "12dicts_words.txt"
output_file = "dictionary.js"
process_word_list(input_file, output_file)