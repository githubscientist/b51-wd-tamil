/*
    client side rendering (CSR) vs server side rendering (SSR):
    
    - client side rendering:
        - rendering is a process to convert the data into HTML and CSS and display it on the browser.
        - client side rendering process happens on the client side (browser).
            - when a user requests a webpage, the server sends the HTML, CSS, and JS files to the browser.
            - javascript is responsible for fetching the data from the server and rendering it dynamically on the browser (client side).

        - pros: 
            - fast initial page load time.
            - better user experience.
        
        - cons: 
            - slower time to load the content.
            - bad SEO (search engine optimization): search engines can't read the content of the page and might not be able to index the page.
    
    - server side rendering:
        - server side rendering process happens on the server.
            - when a user requests a webpage, the server sends the HTML, CSS, and JS files to the browser.
            - the server is responsible for fetching the data from the server and rendering it dynamically on the browser (client side).
        - pros:
            - better SEO (search engine optimization): search engines can read the content of the page and index it.
            - faster time to load the content.
        
        - cons:
            - slower initial page load time.
            - bad user experience.
    
    - frameworks that support server side rendering:
        - next.js (react): supports both client side rendering and server side rendering out of the box.
        - nuxt.js (vue): supports both client side rendering and server side rendering out of the box.
        - angular universal (angular): supports both client side rendering and server side rendering out of the box.
    
    - We can achieve server side rendering in react by using next.js or ReactDOMServer without using any third party libraries.

*/