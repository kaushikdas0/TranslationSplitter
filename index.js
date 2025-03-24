const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Function to process the Excel file and create language files
function processTranslations() {
    try {
        // Read the Excel file
        const workbook = XLSX.readFile('Translation_File.xlsx');
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);

        // Get all language columns (excluding the Key column)
        const languages = Object.keys(data[0]).filter(key => key !== 'Key');

        // Process each language
        languages.forEach(language => {
            const translations = {};
            
            // Extract translations for current language
            data.forEach(row => {
                if (row.Key && row[language]) {
                    translations[row.Key] = row[language];
                }
            });

            // Create language file
            const fileName = `${language.toLowerCase()}.txt`;
            let content = '';
            
            // Format translations as "KEY" = "VALUE";
            Object.entries(translations).forEach(([key, value]) => {
                content += `"${key}" = "${value}";\n`;
            });

            // Write to file
            fs.writeFileSync(fileName, content);
            console.log(`Created ${fileName}`);
        });

        console.log('Translation files created successfully!');
    } catch (error) {
        console.error('Error processing translations:', error.message);
    }
}

// Run the script
processTranslations(); 