# Philosophy Department Class Routine Viewer

A responsive web application for viewing class routines of the Philosophy Department at Carmichael College, Rangpur.

## Features

- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Multi-year Support**: View routines for 1st, 2nd, 3rd, 4th year and Masters students
- **Interactive UI**: Clean, modern interface with glass morphism effects
- **Real-time Updates**: Shows live classes based on current time
- **Offline Support**: Works without internet connection (data bundled in JSON)
- **Bilingual Interface**: Interface in Bengali (default)

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- JSON for data storage

## Project Structure

```
rutin/
├── routine.html          # Main HTML file
├── philosophy.json    # Data file containing routines, teachers, etc.
└── README.md          # This file
```

## Data Structure

The application loads all data from `philosophy.json` which contains:

- College information (name, department, effective date)
- Teacher information with codes and names
- Weekly class routines for each academic year
- Room numbers and class details

## How to Use

1. **Local Usage**: Simply open `routine.html` in any modern web browser
2. **Web Hosting**: Upload all files to your web server
3. **Select Year**: Choose your academic year from the dropdown
4. **View Routine**: See the weekly routine in both table and mobile-friendly formats

## Customization

To customize for your own institution:

1. Update `philosophy.json` with your own data
2. Modify college name and department information in the JSON file
3. Update teacher codes and names as needed
4. Adjust class times if different from the default schedule

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License with attribution required. You are free to use, modify, and distribute this software, but you must include the original copyright notice and disclaimer. The credit attribution ("Made With ❤️ By B.M Shifat") must not be removed or altered from any distribution of this software or its derivatives.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Acknowledgments

- Built with Tailwind CSS for styling
- Uses modern JavaScript for interactivity
- Designed with a focus on user experience and accessibility