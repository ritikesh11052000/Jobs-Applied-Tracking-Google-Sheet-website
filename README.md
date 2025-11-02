# Jobs-Applied-Tracking-Google-Sheet-website

A web-based job application tracking system that allows users to submit job application details through a form, which are then stored in a Google Sheet for easy management and tracking.

## Overview

This project provides a simple, user-friendly interface for tracking job applications. Users can fill out a form with details like company name, job title, application status, and more. The data is submitted to a Google Apps Script backend, which appends the information to the appropriate sheet in a shared Google Spreadsheet.

## Tech Stack

### Frontend
- **HTML5**: Structure of the web form
- **CSS3**: Styling with custom properties (CSS variables) for a modern, dark-themed UI
- **JavaScript (ES6+)**: Form validation, AJAX submission using Fetch API, and dynamic UI updates

### Backend
- **Google Apps Script**: Server-side JavaScript runtime for handling HTTP requests and interacting with Google Sheets

### Data Storage
- **Google Sheets**: Cloud-based spreadsheet for storing job application data

### Additional Technologies
- **Google Fonts (Inter)**: Typography for better readability
- **CSS Grid and Flexbox**: Responsive layout design

## Folder Structure

```
Jobs-Applied-Tracking-Google-Sheet-website/
├── .gitignore          # Git ignore file
├── Code.gs             # Google Apps Script code for handling form submissions
├── index.html          # Main web form interface
├── README.md           # Project documentation (this file)
└── TODO.md             # Project task list
```

## Data Storage

All job application data is stored in a Google Spreadsheet accessible at:
[https://docs.google.com/spreadsheets/d/1KDlQesWHNaXxxQdyM0NnjAsAMng3vsxI8ieUWpU4gfQ/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1KDlQesWHNaXxxQdyM0NnjAsAMng3vsxI8ieUWpU4gfQ/edit?usp=sharing)

The spreadsheet contains two main sheets:
- **Ritikesh**: For applications submitted by Ritikesh
- **Prathmesh**: For applications submitted by Prathmesh

### Data Columns
The form captures the following information (matching the spreadsheet columns):
1. Date Applied (A)
2. Company Name (B)
3. Job Title (C)
4. Application Status (D)
5. Source (E)
6. Job Description Link (F)
7. Contact Person/Recruiter (G) - Optional
8. Job ID (H) - Optional
9. Follow-up Date (I) - Optional
10. Notes/Comments (J) - Optional

## Setup and Deployment

### Prerequisites
- Google Account with access to Google Sheets and Apps Script
- Basic knowledge of deploying Google Apps Script web apps

### Deployment Steps

1. **Create a Google Spreadsheet**:
   - Create a new Google Sheet or use the existing one linked above
   - Add two sheets named "Ritikesh" and "Prathmesh"
   - Set up column headers in row 1: Date Applied, Company Name, Job Title, Application Status, Source, Job Description Link, Contact Person, Job ID, Follow-up Date, Notes

2. **Deploy Google Apps Script**:
   - Open the Google Sheet
   - Go to Extensions > Apps Script
   - Copy the contents of `Code.gs` into the script editor
   - Save the project
   - Click "Deploy" > "New deployment"
   - Select type "Web app"
   - Set "Execute as" to your account
   - Set "Who has access" to "Anyone" (for public form access)
   - Deploy and copy the web app URL

3. **Update the HTML Form**:
   - Open `index.html`
   - Replace the placeholder URL in the `webAppUrl` variable with your deployed Apps Script URL
   - Example: `const webAppUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`

4. **Host the Frontend**:
   - Upload `index.html` to any web server or static hosting service (GitHub Pages, Netlify, etc.)
   - Ensure the hosting allows CORS for the Google Apps Script domain

## Usage

1. Open the hosted `index.html` file in a web browser
2. Select the applicant (Ritikesh or Prathmesh)
3. Fill in the required fields:
   - Date Applied (auto-filled with today's date)
   - Company Name
   - Job Title
   - Application Status
   - Source
   - Job Description Link
4. Optionally fill in additional details:
   - Contact Person
   - Job ID
   - Follow-up Date
   - Notes
5. Click "Submit Application"
6. The form will validate inputs and submit data to the Google Sheet
7. Success/error messages will be displayed

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Form Validation**: Client-side validation for required fields
- **Real-time Feedback**: Loading indicators and success/error messages
- **Auto-fill**: Today's date is automatically set
- **Dark Theme**: Modern, eye-friendly UI
- **AJAX Submission**: No page refresh required
- **Error Handling**: Comprehensive error handling for network issues

## Security Notes

- The current setup allows public access to submit data
- Consider implementing authentication if sensitive information is being collected
- Regularly review the Google Sheet sharing settings

## Contributing

To contribute to this project:
1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is open-source. Please check the license file for details.

## Support

If you encounter any issues or have questions, please check the code comments or create an issue in the repository.
