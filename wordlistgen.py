import nltk
from nltk.corpus import words
from wordfreq import word_frequency

# Download the words corpus if not already present
nltk.download('words')

# Get all English words
all_words = set(words.words())

# Filter words with 2-5 letters and apply frequency threshold
MIN_WORD_LENGTH = 3
MAX_WORD_LENGTH = 5
MIN_FREQUENCY = 5e-6  # Adjust this value to change the rarity threshold

filtered_words = sorted(list(
    word.lower() for word in all_words 
    if MIN_WORD_LENGTH <= len(word) <= MAX_WORD_LENGTH 
    and word.isalpha()
    and word_frequency(word.lower(), 'en') > MIN_FREQUENCY
))

# Create the dictionary string
dictionary_string = "const dictionary = new Set([\n"
for i, word in enumerate(filtered_words):
    if i % 10 == 0:
        dictionary_string += "            "
    dictionary_string += f'"{word}"'
    if i < len(filtered_words) - 1:
        dictionary_string += ", "
    if (i + 1) % 10 == 0:
        dictionary_string += "\n"
dictionary_string += "\n        ]);"

# Write to file
with open('english_words_2_to_5.txt', 'w') as f:
    f.write(dictionary_string)

print(f"File 'english_words_2_to_5.txt' has been created successfully with {len(filtered_words)} words.")