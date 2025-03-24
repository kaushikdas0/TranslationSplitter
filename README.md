# Translation Extractor

This Node.js script extracts translations from an Excel file and creates separate language files in the format "KEY" = "VALUE";

## Prerequisites

- Node.js installed on your system
- Excel file named `Translation_File.xlsx` with the following structure:
  - First column: Key
  - Other columns: Language translations (e.g., English, Korean)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Place your `Translation_File.xlsx` in the same directory as the script

3. Run the script:
```bash
npm start
```

## Output

The script will create separate text files for each language in the format:
- english.txt
- korean.txt
etc.

Each file will contain translations in the format:
```
"KEY1" = "VALUE1";
"KEY2" = "VALUE2";
``` 