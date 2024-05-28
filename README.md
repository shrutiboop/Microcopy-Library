# Microcopy-Library
A small html website that allows users to search words and find microcopy ideas.

# Microcopy Selector Website

Welcome to the Microcopy Selector Website! This project provides a clean, modern, and tech-themed interface for users to browse and copy various microcopy dialogues. The website is designed to be user-friendly and visually appealing, with a dark theme and professional fonts.

## Features

- **Search Bar**: Easily search for specific microcopy dialogues.
- **Microcopy Display**: Showcases a variety of microcopy dialogues with a clean and modern design.
- **Dark Theme**: Aesthetically pleasing dark theme with complementary pastel colors.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Interactive Elements**: Smooth animations and interactive elements for a better user experience.

## Technologies Used

- HTML
- CSS
- JavaScript

## WEBISTE PICTURES

<img width="1499" alt="Screenshot 2024-05-27 at 8 04 32 PM" src="https://github.com/shrutiboop/Microcopy-Library/assets/64666409/9f755eb5-c824-4da0-a065-ccdd09d79ded">
<img width="1499" alt="Screenshot 2024-05-27 at 8 05 12 PM" src="https://github.com/shrutiboop/Microcopy-Library/assets/64666409/d03a0aee-b485-4b41-8f36-c44dd6393800">
<img width="1499" alt="Screenshot 2024-05-27 at 8 05 39 PM" src="https://github.com/shrutiboop/Microcopy-Library/assets/64666409/7b1f1a0e-a0b5-4d69-8989-3c863ecf468e">



## Installation

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/yourusername/microcopy-selector-website.git
    ```
2. Navigate to the project directory.
    ```bash
    cd microcopy-selector-website
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. **Homepage**: The homepage features a search bar at the top. You can type in keywords to search for specific microcopy dialogues.
2. **Microcopy Section**: Scroll down to view different microcopy dialogues. Each dialogue is contained within a box that changes color based on its position (even or odd).
3. **Copy Microcopy**: Click on the microcopy text to copy it to your clipboard.

## Customization

### Change Font Color
To change the font color of the microcopy dialogues:
1. Open `styles.css`.
2. Locate the `.microcopy` class and modify the `color` property.
    ```css
    .microcopy {
        background-color: #2c2c2c;
        color: black; /* Change font color to desired color */
        border-radius: 10px;
        margin: 10px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        flex-basis: 45%;
    }
    ```

### Change Box Colors
To change the background colors of the microcopy boxes:
1. Open `styles.css`.
2. Modify the `background-color` properties for the `.microcopy:nth-child(even)` and `.microcopy:nth-child(odd)` classes.
    ```css
    .microcopy:nth-child(even) {
        background-color: #d1e8ee; /* Change color of even boxes */
    }

    .microcopy:nth-child(odd) {
        background-color: #C8c7d7; /* Change color of odd boxes */
    }
    ```

## Contributing

Contributions are welcome! If you have any improvements or suggestions, feel free to submit a pull request or open an issue.

## Contact

For any inquiries or feedback, please contact me at shrutireddy23m@gmail.com

Enjoy using the Microcopy Selector Website! 😊

