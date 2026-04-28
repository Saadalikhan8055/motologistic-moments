# Excel Integration Guide

## Features Added

### 1. Export Bookings to Excel
- Click **📥 Export to Excel** button in the admin dashboard
- Downloads all bookings as an `.xlsx` file with the current date
- Includes formatted headers with gold background and auto-fitted columns
- Pre-styled for easy viewing and printing

### 2. Import Bookings from Excel
- Click **📤 Import Excel** button in the admin dashboard
- Select an Excel file (`.xlsx`, `.xls`, or `.csv`)
- The system will:
  - Import new bookings with new IDs
  - Update existing bookings if ID matches
  - Validate required fields (id, fullName, email, phone)
  - Provide feedback on imported/updated count
  - Display any errors that occurred

## Excel File Format

Your Excel file should have these columns:
- **id** - Unique booking identifier (number)
- **timestamp** - Date/time (ISO format, optional for new bookings)
- **fullName** - Customer's full name (required)
- **email** - Customer's email (required)
- **phone** - Customer's phone number (required)
- **vehicleModel** - Vehicle model (optional)
- **preferredDate** - Preferred service date (optional)
- **package** - Service package (essential/signature/premium)
- **specialRequests** - Special requests or notes (optional)
- **status** - Current status (pending/confirmed/completed/cancelled)

## API Endpoints

### Export Bookings
```
GET /api/admin/bookings/export
```
Returns: Excel file (`.xlsx`)

### Import Bookings
```
POST /api/admin/bookings/import
```
Body: FormData with `file` field containing Excel file
Response: 
```json
{
  "success": true,
  "message": "Imported X new bookings, updated Y existing bookings",
  "imported": X,
  "updated": Y,
  "errors": []
}
```

## How to Use

### Export Current Bookings
1. Log in to admin dashboard
2. Click **📥 Export to Excel**
3. File downloads automatically with name: `bookings-YYYY-MM-DD.xlsx`

### Import or Update Bookings
1. Open an exported file or create a new one with the required columns
2. Make your changes/additions in Excel
3. Log in to admin dashboard
4. Click **📤 Import Excel**
5. Select your updated file
6. Review the confirmation message
7. Dashboard automatically refreshes with new data

## Notes
- Existing bookings are identified by `id` and will be updated if the same ID is imported
- New bookings must have unique IDs
- All required fields must be present or the row will be skipped
- Status updates made in the admin UI are instantly reflected and can be exported
