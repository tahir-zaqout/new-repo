// Variables ====================
const homeLink = document.querySelector('.home');
const aboutLink = document.querySelector('.about');
const contactLink = document.querySelector('.contact');

// Add Event Listener ==================
//Home Page
homeLink.addEventListener('click', () => {
    document.querySelector('.show-data').innerHTML = `

        <div class="container">
            <h2> This Is The Home Page</h2>
        </div>
        <style>
        h2 {
            margin-top: 30px;
            margin-bottom: 15px
        }
    </style>
    `;
});

//About Page

aboutLink.addEventListener('click', () => {
    document.querySelector('.show-data').innerHTML = `

        <div class="container">
            <h2> This Is The About Page</h2>
            <p> This Paragraph For Test </p>
        </div>

        <style>
            h2 {
                margin-top: 30px;
                margin-bottom: 15px
            }
        </style>
    `;
});

// Contact Page

contactLink.addEventListener('click', () => {
    document.querySelector('.show-data').innerHTML = `
        <div class="container">
            <h2> Contact For Details</h2>
            <hr>
            <h4> Name</h4>
            <span> Ahmed </span>
            <br>
            <h4> Phone</h4>
            <span> 123456 </span>
            <br>
            <h4> Email</h4>
            <span> email@email.com</span><br>
            
        </div>
    <style>
    h2 {
        text-align: center;
        margin: 30px 0
    }
    h4{
        padding: 10px;
        display: inline-block
    }
    span {
        padding: 10px;

    }
    </style>
    
    `;
});