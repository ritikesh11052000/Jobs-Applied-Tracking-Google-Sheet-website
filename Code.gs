/**
 * Handles incoming HTTP POST requests from the external web form.
 * It determines the target sheet (Ritikesh or Prathmesh) and appends
 * the new application data row.
 *
 * @param {Object} e The event object containing form parameters.
 */
function doPost(e) {
  // Check if data was successfully received
  if (!e || !e.parameter) {
    return ContentService.createTextOutput("Error: No form data received.").setMimeType(ContentService.MimeType.TEXT);
  }

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Get the target sheet name from the form data (Ritikesh or Prathmesh)
    var sheetName = e.parameter.sheetName;
    var sheet = ss.getSheetByName(sheetName);

    // Validate that the target sheet exists
    if (!sheet) {
      return ContentService.createTextOutput("Error: Sheet named '" + sheetName + "' not found in the spreadsheet.").setMimeType(ContentService.MimeType.TEXT);
    }

    // 2. Extract data from the form (e.parameter)
    // NOTE: These variable names match the HTML 'name' attributes exactly.
    var dateApplied = e.parameter.dateApplied || '';
    var companyName = e.parameter.companyName || '';
    var jobTitle = e.parameter.jobTitle || '';
    var appStatus = e.parameter.appStatus || '';
    var source = e.parameter.source || '';
    var jobLink = e.parameter.jobLink || '';
    var contactPerson = e.parameter.contactPerson || '';
    var jobID = e.parameter.jobID || '';
    var followUpDate = e.parameter.followUpDate || '';
    var notes = e.parameter.notes || '';
    
    // 3. Create the row array matching the exact 9-column order (A through I)
    // This order MUST match your spreadsheet headers:
    // Date Applied, Company Name, Job Title, Application Status, Source, Job Description Link, Contact Person, Job ID, Follow-up Date
    var newRow = [
      dateApplied,    // Column A
      companyName,    // Column B
      jobTitle,       // Column C
      appStatus,      // Column D
      source,         // Column E
      jobLink,        // Column F
      contactPerson,  // Column G
      jobID,          // Column H
      followUpDate    // Column I
    ];

    // 4. Append the new row to the selected sheet
    sheet.appendRow(newRow);

    // 5. Return a simple text success message to the AJAX call
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    // Log the error for debugging and return a generic error message
    Logger.log("Submission Error: " + error.toString());
    return ContentService.createTextOutput("An unexpected error occurred: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

/**
 * This function is required for Web App deployment but is not used for form submission.
 * It prevents simple browser access (GET requests) from working.
 */
function doGet() {
  return ContentService.createTextOutput("Access Denied. Submit data using the POST method from the form.").setMimeType(ContentService.MimeType.TEXT);
}
