import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',                          //where test files present
  
  //timeout: 30*1000  max timeout
  //retries: 2        How many times to re-run a failing test.
 
  reporter: 'html',          //how results are shown 
  
  fullyParallel: false,
  workers:1,
  

  use: {                        //use: defines default context/browser settings for all tests
    
    headless: false,
    trace: 'on-first-retry',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'], // 🖥️ tells Chromium to open maximized
    },
    //browserName: 'chromium' 
    //dont use browser config here, it is old approach

  },

    projects: [                                           //same test across all browsers
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],  


});
