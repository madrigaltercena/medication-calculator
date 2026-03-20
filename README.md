# Medication Calculator Web Application

A web application that calculates how long medication will last based on:
- Medication quantity (ml)
- Phase 1 pump rate (ml/hour)
- Phase 2 pump rate (ml/hour)

## Features

- Input fields for medication quantity and two pump rates
- Step-by-step calculation display
- Total duration calculation showing days, hours, and minutes
- Responsive design for mobile and desktop
- Clean, intuitive user interface

## How It Works

The calculator uses the formula:
**Duration (hours) = Quantity (ml) ÷ Pump Rate (ml/hour)**

For each phase:
1. Phase 1 Duration = Quantity ÷ Phase 1 Pump Rate
2. Phase 2 Duration = Quantity ÷ Phase 2 Pump Rate
3. Total Duration = Phase 1 Duration + Phase 2 Duration

## Local Development

To run the application locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser to http://localhost:3000

## Deployment to Vercel

This application is configured for easy deployment to Vercel:

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the application:
   ```bash
   vercel
   ```

Or connect your GitHub repository to Vercel for automatic deployments.

## Technologies Used

- React 18
- CSS3
- Vercel for deployment

## License

MIT