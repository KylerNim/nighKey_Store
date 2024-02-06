import "../styles/header.css"

import CarouselBanner from "./Carousels/CarouselBanner"

const Header = (props) => {
    const helpLinks = ['Order Status', 'Shipping & Delivery', 'Returns', 'Order Cancellation', 'Size Charts', 'Contact Us', 'Membership', 'Promotions & Discounts', 'Product Advice', 'Send Us Feedback']


    let prevScrollpos = window.scrollY;
window.onscroll = function() {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "-80px"; /* adjust this value to the height of your header */
  }
  prevScrollpos = currentScrollPos;
}

    return (
        <>
        <nav id="topHeader">
        <div className="partner-brands">
        <a className="partner-brands">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="5.003 13.06 239.999 223.884"><path d="M135.377 28.32a12.9 12.9 0 0 1-.189-1.504c-.492-7.083 4.84-13.225 11.922-13.724 7.09-.494 13.23 4.845 13.725 11.928s-4.839 13.225-11.921 13.724c-.448.034-.892.04-1.326.023-.287.074-.459.109-.706.327-.729 1.136 1.854.924.098 5.889 0 0-.012.545-.207 1.09-.138 1.906-.871 7.554-.976 10.562.373.436.478.648.437 1.705-.166 1.429-.494 4.931-1.021 7.175-.447 1.923-1.232 2.29-1.865 2.761-.89 3.984-1.125 7.284-3.408 12.123-.207 3.668-.465 4.667-1.234 6.458-.086 5.401.287 6.205-3.357 14.757-.941 4-.046 6.767.947 10.923 1.016 4.271 3.834 6.056 4.253 10.43.987 10.301.74 17.314-1.47 25.391l1.929 4.568c2.394 1.098 8.334 4.1 5.04 8.852 4.639 2.438 11.646 5.027 17.426 9.971 2.325 1.936 4.781 4.047 6.985 6.525 4.196.654 3.748.987 6.858 2.898 9.145 5.607 23.81 16.73 32.311 24.605 1.464.855 2.061 1.471 3.243 2.091.185.354.235.436.194.532-.406 1.028-.391 1.058-.758 1.877.459.507 1.314.981 1.825 1.425.478.149.478-.08 1.298-.281 1.067.999 2.389 1.804 2.863 1.757 1.447-.367 1.2-.068 2.423-1.436.44-.453 1.177.006 1.177.006.459-.539 1.446-1.613 2.762-2.389 1.05-.619 3.054-.688 3.054-.688.671.006.545.694.487.918-.758.391-2.364.821-3.266 1.486-1.964 2.031-3.502 4.771-3.502 4.771 3.954-.54 6.383.441 9.678.063 1.797-.104 3.123.012 5.01-1.354 0 0 1.814-1.291 3.439-1.976 1.578-.688 3.076-.321 4.465.688.981 1.107 1.572 1.113.08 2.676-.539.607-1.32 1.285-2.312 2.267-1.745 1.724-4.094 4.022-6.526 5.924-2.463 1.923-5.258 3.65-7.003 4.442-4.402 3.163-3.363 2.336-6.824 5.471-.437.391-1.596 1.09-2.158 1.463-1.365.896-1.791.149-2.681-1.492 0 0-.407-.613-1.079-1.923-.734-1.429-1.285-3.063-1.062-3.036-.82-.104-4.512-4.432-4.521-5.36-.781-.179-4.111-3.403-4.23-4.019l-2.95-2.365c-3.375.701-4.149-1.395-13.063-7.72-1.017-.018-2.588-.567-4.84-2.237-4.022-3.222-13.672-10.511-15.308-11.344-1.757-.895-3.856-1.738-5.144-2.801-1.929-.355-2.984-.557-3.949-.826-.986-.27-1.883-.619-4.379-.953-4.063-.505-8.277-2.187-12.289-4.195-1.899-.9-3.553-1.359-5.188-2.062-3.668-1.549-6.813-2.944-9.25-3.507-.93-.092-5.35-1.418-7.668-2.771-.804-.414-1.269-.81-1.797-.931-1.217-.28-1.998.201-2.548.386-2.973 1.549-5.757 2.887-8.329 4.271-2.394 1.28-4.598 2.61-6.934 3.955-2.107 1.217-4.541 2.364-7.043 3.559 0 0-7.135 3.576-11.032 4.966-3.381 2.76-10.292 7.535-14.51 9.9-2.089.993-6.147 3.564-8.019 4.139-1.068.86-4.873 3.575-7.852 5.814-2.302 1.722-4.041 3.174-4.041 3.174-1.337 1.199-1.246 1.768-3.788.688-.706.58-1.251.941-1.705 1.274-1.836 1.332-1.992 1.011-2.663.976-1.28 1.108-1.441.535-2.56 1.81-.735 1.138.017.866-1.533 1.418-.327.126-.482.521-.734.74-1.246 1.026-1.251 3.926-4.236 4.133-1.728 1.233-1.286 2.722-2.606 2.657.081 1.279-2.336 3.146-2.772 3.14-3.806 1.313-4.07-1.485-8.639.603-.591.271-1.458 1.018-2.6 1.234-2.009.379-4.437-.018-5.918-1.165-2.331-1.797-4.477-5.264-4.477-5.264-.741-1.751-.31-2.858 2.003-4.513.964-.613 1.142-1.072 2.761-1.183.804-.304.585.161 2.021-.354.832-.299.832-.086 2.508-.229.384-.259.924-.351 1.647-.586 1.326-.437 2.618-.924 2.618-.924s.338-.339 1.613-.218c1.079-.442 2.187-1.098 2.755-1.299-.144-1.709.04-1.629.832-2.317.987-.851 1.165-.712 1.9-.185.31-.179.459-.24.425-.5-.121-.89-.884-1.309-.654-3.271-.339-.786-.838-1.756-.729-2.342.161-.632.316-.937.7-1.138.408-.217.54.076.758.321.39.454.706 1.798.706 1.798.138 1.516.608 3.479 2.106 2.371.884-.896 1.056-3.283 2.858-2.772l1.286 1.118c1.091-1.026 1.143-1.026 1.797-1.439 0 0-1.022-1.033-.126-1.837.614-.546 1.354-.937 2.669-2.394 3.61-3.989 5.464-5.752 9.368-8.967 7.789-6.406 16.651-10.899 22.282-13.133 1.836-2.331 3.622-3.88 7.697-4.271 4.844-8.18 14.12-15.485 16.25-16.65 1.733-3.141 2.485-2.807 4.752-3.438 1.796-1.44 2.204-1.44 3.008-2.944.781-3.104-1.802-11.399 4.792-11.818 1.401-1.979 1.051-1.504 2.612-3.375-1.056-2.606-1.492-4.786-1.779-6.664-.052-.218-2.617-2.026-1.889-4.386-1.09-1.297-3.128-4.324-3.765-5.742-.292.006-.534-.104-.855-.148-.333-.053-.747-.034-1.211-.074-1.027 2.65-2.146 2.847-3.972 3.432-3.26 6.948-4.408 9.889-13.632 15.633-3.662 4.1-4.833 8.668-4.816 8.6-.631 1.354-.408 3.249-.075 4.265-.482 1.504-.356 1.653-.356 1.653.201.568.724 1.32 1.366 1.48 1.108.293 2.216.246 2.152 1.48-.149 1.544-2.175 1.291-3.134 1.119-3.691-.586-2.525-2.991-4.885-2.188-1.808 1.183-2.485 4.673-5.436 4.22-.39-.258-.27-1.021-.006-1.572.414-.861 1.148-1.573.712-1.896a583.852 583.852 0 0 0-5.763 1.878c-1.808.493-3.789-.408-2.009-1.597.827-.321 2.009-.724 3.467-1.658 0 0 .751-1.022-.689-.511-1.573.562-3.892.912-5.556.729 0 0-3.45-.453-3.892-.724-.448-.271-.855-1.337.224-1.331 1.366.012 4.787-.391 7.439-1.097 1.28-.499 3.714-1.939 5.08-2.617 0 0 1.481-2.158 2.296-2.583 1.36-1.566 2.508-2.491 3.713-4.093 1.177-2.429 2.394-6.273 6.291-12.226 1.802-2.744 4.041-5.94 6.859-8.798 0 0 .729-4.574 4.397-7.829.81-1.906 2.038-4.15 3.249-6.228.471-.798.918-1.492 1.366-2.25 1.137-1.785 2.331-5.108 6.762-5.631 0 0 1.894-1.4 2.623-2.395 1.137-.97.878-2.479 1.802-3.542-1.412-1.377-5.022-3.966-5.373-7.565-.373-3.817.987-6.957 3.295-9.281 2.56-2.56 5.258-3.84 8.535-3.645 4.092.608 4.867 1.963 6.17 3.306 1.251 1.274 1.716.454 2.244 1.946 3.433.913 3.243.511 3.214 3.037.528.711 1.412 1.372 1.4 2.847 1.154-2.394 1.383-2.835 4.466-5.47.729-2.141 1.224-4.247 1.864-6.388.601-1.98 1.348-4.018 1.927-5.551-.614-4.328.647-5.045 2.33-8.839-.298-.522-.234-.671-.108-1.527.654-2.508 1.676-5.826 2.284-7.99 0 0 .201-.861 1.091-.924.77-2.738 1.924-7.835 2.118-8.874.792-2.864.281-3.783-.327-5.396-.195-.528-.104-1.28-.441-1.866-.959-1.67-1.991-3.84-2.691-5.39-.454-.987-1.172-4.707-1.172-4.707-.616-1.899-.082.001-.082.001"/></svg>
        </a>
        <a className="partner-brands"> 
        <svg xmlns="http://www.w3.org/2000/svg" height="27" width="30" viewBox="-16.71 -23.5 144.82 141"><path d="M19.3 36.7L0 30.4 12.1 47 .2 63.5l19.1-6.3 11.6 16.6V53.3L50.4 47l-19.5-6.4V20.2z"/><path d="M74.7 47L31.9 94h36.7l42.8-47L68.6 0H31.9z"/></svg>
        </a>
        </div>
        <div className="links">
            <div className="link">Find a Store</div><p>|</p>
            <div className="dropdown link">Help
            <div className="dropdown-content">
            <h2>Help</h2>
            {helpLinks.map(link => <a key={link}>{link}</a>)}
        </div>
            </div><p>|</p>
            <div className="link">Join Us</div><p>|</p>
            <div className="link">Sign in</div>
        </div>
        
        </nav>
        
        <div id="mainNav">
            <div className="logo">
                <svg clipRule="evenodd" height="59" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" viewBox="831.015 861.67509845 1337.165 497.16490155" width="59" xmlns="http://www.w3.org/2000/svg"><path d="m1077.4 862.175c-76.02 86.851-181.29 184.085-206.557 305.415-39.828 191.25 192.817 186.09 305.737 139.41 332.35-137.38 661.07-283.39 991.6-425.084-321.38 85.602-641.61 175.654-964.15 256.804-230.745 58.06-185.84-147.9-126.63-276.545z" fillRule="evenodd"/><path d="m1077.72 861.844a.476.476 0 0 0 -.66.031c-4.78 5.44-3.17 3.615-4.78 5.437-1.21 1.371-2.44 2.727-3.66 4.094-4.51 5.083-9.06 10.149-13.62 15.188-13.76 15.188-27.64 30.266-41.34 45.5-32.24 35.826-63.72 72.656-90.004 113.156-20.457 31.52-37.709 65.38-48.125 101.59a284.89 284.89 0 0 0 -4.719 18.75c-6.919 32.19-8.077 67.26 6.688 97.53 2.331 4.78 5.045 9.4 8.094 13.76 4.856 6.93 10.57 13.23 16.937 18.81 9.513 8.33 20.419 15 31.907 20.25 17.625 8.05 36.612 12.85 55.75 15.59 28.262 4.05 57.102 3.8 85.432.69 28-3.07 55.83-8.9 82.54-17.91 11.15-3.76 21.97-8.37 32.84-12.87 12.55-5.2 25.09-10.4 37.62-15.63 43.23-18.01 86.38-36.15 129.5-54.4 162.57-68.84 324.53-139.13 486.47-209.41 81.62-35.422 163.21-70.917 244.94-106.062 19.79-8.509 39.59-16.992 59.38-25.5 4.73-2.035 9.45-4.091 14.18-6.126 1.29-.554 2.59-1.101 3.88-1.656.16-.071 1.05-.406 1.06-.5.03-.185-.16-.159-.28-.187.01-.038-.07-.051-.03-.094.01-.017-.04.021-.06.031-.28.01-.61.109-.78.156-.84.224-1.67.433-2.5.657-4.19 1.117-8.38 2.226-12.57 3.343-10.88 2.906-21.75 5.834-32.62 8.75a63862.25 63862.25 0 0 0 -95.35 25.626c-95.33 25.726-190.59 51.698-285.9 77.5-167.62 45.372-335.33 90.522-503.69 133.092-10.08 2.55-20.14 5.11-30.22 7.63-8.54 2.13-17.15 4.05-25.81 5.62a297.76 297.76 0 0 1 -20.38 3c-5.27.59-10.54 1.01-15.84 1.25 16.14-.7 32.2-3.07 47.97-6.47 7.25-1.56 14.43-3.37 21.62-5.18 7.56-1.91 15.13-3.81 22.69-5.72 41.99-10.61 83.92-21.46 125.84-32.32 143.38-37.14 286.34-75.81 429.29-114.559 84.01-22.773 168.04-45.564 252.09-68.219 28.02-7.551 56.04-15.054 84.06-22.562 9.62-2.577 19.25-5.151 28.88-7.719l8.78-2.343c.82-.221 1.64-.436 2.47-.657-.05.022-.11.041-.16.063-1.29.554-2.58 1.101-3.87 1.656-4.31 1.848-8.61 3.714-12.91 5.562-17.21 7.394-34.42 14.763-51.63 22.157-68.4 29.39-136.71 59.046-205.03 88.661-170.13 73.74-340.15 147.78-510.93 220.03-50.03 21.16-100.08 42.25-150.22 63.12-13.4 5.58-26.81 11.17-40.22 16.72-9.6 3.97-19.16 8.05-28.97 11.5-19.46 6.84-39.62 11.9-59.94 15.41-13.32 2.3-26.73 4.03-40.22 5.03-10.46.77-20.97 1.08-31.47 1-8.42-.07-16.86-.46-25.24-1.25-5.62-.53-11.21-1.18-16.786-2.03-35.323-5.39-72.055-18.44-95.875-46.35-3.8-4.45-7.215-9.24-10.188-14.28-4.322-7.33-7.666-15.22-10.093-23.37-3.863-12.97-5.366-26.56-5.188-40.07.29-21.98 4.826-43.83 11.281-64.78 10.304-33.43 26.389-64.83 45.281-94.18 28.931-44.95 64.302-85.339 100.158-124.818 11.97-13.182 24.05-26.302 35.97-39.531 3.51-3.897 2.14-2.394 17.34-19.469 0-.007.03-.023.03-.031.83-.931 0-.004.94-1.062a.43.43 0 0 0 -.03-.625zm64.28 286.686c-14.72.66-30.1-.16-44.56-3.78 11.45 2.88 23.31 4.07 35.09 4.09 3.16.01 6.31-.17 9.47-.31zm-65.97-283.311a616.06 616.06 0 0 0 -1.84 4.062c-.86 1.904-1.67 3.836-2.5 5.75.44-1.025 1.68-3.845 4.34-9.812zm-4.34 9.812c-.17.376-1.27 2.836-1.6 3.594-.15.37-.28.755-.43 1.125.67-1.573 1.35-3.15 2.03-4.719zm-2.03 4.719c-.3.69-.62 1.372-.91 2.062-3.57 8.419-6.9 16.928-10.09 25.5a636.49 636.49 0 0 1 11-27.562zm-11 27.562c-.21.548-.46 1.078-.66 1.626-1.07 2.902-2.06 5.83-3.09 8.75a553.48 553.48 0 0 1 3.75-10.376zm-3.75 10.376c-.82 2.304-1.69 4.593-2.47 6.906-.19.539-.35 1.085-.53 1.625.96-2.861 1.99-5.687 3-8.531zm-3 8.531c-.66 1.947-1.24 3.92-1.88 5.875.64-1.956 1.22-3.927 1.88-5.875zm-1.88 5.875c-1.34 4.124-2.66 8.25-3.91 12.406 1.24-4.152 2.57-8.286 3.91-12.406zm-3.91 12.406c-.58 1.974-1.12 3.957-1.68 5.938.56-1.979 1.1-3.967 1.68-5.938zm-1.68 5.938c-.9 3.133-1.84 6.254-2.66 9.406-.25.966-.47 1.938-.72 2.906 1.06-4.127 2.21-8.214 3.38-12.312zm-3.38 12.312c-.46 1.807-.87 3.626-1.31 5.438.44-1.815.85-3.629 1.31-5.438zm-4.44 19.219c-.12.595-.28 1.185-.4 1.781-.12.57-.2 1.148-.31 1.719.23-1.168.47-2.335.71-3.5zm-4.9 29.251c-.24 1.94-.4 3.89-.6 5.84.2-1.94.36-3.9.6-5.84zm-.6 5.84c-.22 2.21-.54 4.41-.71 6.63-.12 1.49-.16 2.97-.25 4.47.21-3.71.59-7.4.96-11.1zm-1 12.13c-.26 4.71-.41 9.43-.37 14.15-.04-4.72.12-9.43.37-14.15zm-.37 14.72c.06 5.84.4 11.69 1.03 17.5-.62-5.84-.97-11.71-1.03-17.5zm1.28 19.65c.28 2.31.52 4.62.91 6.91.11.65.31 1.28.44 1.94-.54-2.94-.99-5.88-1.35-8.85zm1.35 8.85c.66 3.6 1.52 7.16 2.5 10.68-.99-3.53-1.84-7.08-2.5-10.68zm2.5 10.68c.35 1.3.65 2.6 1.06 3.88-.4-1.28-.71-2.58-1.06-3.88zm3.9 11.75c.35.86.69 1.72 1.06 2.57-.37-.85-.71-1.71-1.06-2.57zm1.06 2.57c.92 2.09 1.94 4.13 3 6.15a94.333 94.333 0 0 1 -3-6.15zm3 6.15c.2.36.37.74.57 1.1-.2-.36-.37-.73-.57-1.1zm.57 1.1c1.38 2.53 2.89 5.02 4.53 7.4-1.66-2.4-3.14-4.87-4.53-7.4zm4.53 7.4c2.91 4.24 6.2 8.22 9.97 11.85 2.71 2.61 5.68 4.91 8.75 7.09-3.03-2.15-5.97-4.51-8.72-7.16a76.553 76.553 0 0 1 -10-11.78zm18.97 19.13c1.17.82 2.31 1.7 3.53 2.47 1.31.82 2.74 1.41 4.09 2.15-2.6-1.43-5.18-2.9-7.62-4.62zm7.62 4.62c1.12.62 2.23 1.25 3.38 1.81-1.15-.56-2.26-1.19-3.38-1.81zm13.69 6.13c1.38.48 2.72 1.1 4.12 1.53 1.54.46 3.11.79 4.66 1.19-2.97-.76-5.9-1.71-8.78-2.72z"/></svg>
            </div>
            <div className="sections">
                <div className="section">New & Featured
                    <div className="dropdownFeatured">
                    <div className="featuredDiv">
                    <div className="firstCol">
                        <div className="vday">
                        <h2>Valentines Day Shop</h2>
                        <a>Shop All ❤️</a>
                        <a>Gifts for Sneakerheads</a>
                        <a>Gifts Under $30</a>
                        </div>
                        <div className="limited">
                        <h2>Limited Time</h2>
                        <a>Last Chance Sale: Up to 40% Off</a>
                        </div>
                        </div>
                        <div className="new">
                        <h2>New & Featured</h2>
                        <a>New Arrivals</a>
                        <a>Best Sellers</a>
                        <a>Member Product</a>
                        <a>New & Upcoming Drops</a>
                        <a>SNKRS Launch Calendar</a>
                        <a>Nike Tech</a>
                        </div>
                        <div className="shop">
                        <h2>Shop Icons</h2>
                        <a>Air Jordan 1</a>
                        <a>Air Force</a>
                        <a>Dunk</a>
                        <a>Air Max</a>
                        <a>Blazer</a>
                        <a>Pegasus</a>
                        <a>Metcon</a>
                        <a>LeBron</a>
                        </div>
                        <div className="newPeople">
                        <div className="newMen">
                        <h2>New For Men</h2>
                        <a>Shoes</a>
                        <a>Clothing</a>
                        </div>
                        <div className="newWomen">
                        <h2>New For Women</h2>
                        <a>Shoes</a>
                        <a>Clothing</a>
                        </div>
                        <div className="newKids">
                        <h2>New For Kids</h2>
                        <a>Shoes</a>
                        <a>Clothing</a>
                        </div>
                        </div>
                        <div className="jordan">
                        <h2>Jordan</h2>
                        <a>Shop All</a>
                        <a>Latest in Jordan</a>
                        <a>Men</a>
                        <a>Women</a>
                        <a>Kids</a>
                        <a>Basketball</a>
                        </div>
                    </div>
                      
                    </div></div>
                <div className="section">Men
                <div className="dropdownFeatured">
                    <div className="featuredDiv">
                    <div className="firstCol">
                        <div className="vday">
                        <h2>Valentines Day Shop</h2>
                        <a>Shop All ❤️</a>
                        <a>Gifts for Sneakerheads</a>
                        <a>Gifts Under $30</a>
                        </div>
                        <div className="limited">
                        <h2>Limited Time</h2>
                        <a>Last Chance Sale: Up to 40% Off</a>
                        </div>
                        </div>
                        <div className="new">
                        <h2>New & Featured</h2>
                        <a>New Arrivals</a>
                        <a>Best Sellers</a>
                        <a>Customize with Nike by You</a>
                        <a>Club Fleece & More</a>
                        </div>
                        <div className="shoes">
                        <h2>All Shoes</h2>
                        <a>Lifestyle</a>
                        <a>Jordan</a>
                        <a>Air Max</a>
                        <a>Air Force 1</a>
                        <a>Dunks & Blazers</a>
                        <a>Training & Gym</a>
                        <a>Basketball</a>
                        <a>Running</a>
                        <a>Nike SB</a>
                        <a>Sandals & Slides</a>
                        <a>Shoes $100 & Under</a>
                        </div>
                        <div className="clothing">
                        <h2>All Clothing</h2>
                        <a>Jordan</a>
                        <a>Matching Sets</a>
                        <a>Big & Tall</a>
                        <a>Hoodies & Sweatshirts</a>
                        <a>Pants & Tights</a>
                        <a>Jackets & Vests</a>
                        <a>Tops & T-Shirts</a>
                        <a>Shorts</a>
                        <a>Underwear</a>
                        <a>Socks</a>
                        </div>
        
                        <div className="sport">
                        <h2>Shop by Sport</h2>
                        <a>Basketball</a>
                        <a>Golf</a>
                        <a>Soccer</a>
                        <a>Running</a>
                        <a>Tennis</a>
                        <a>Baseball</a>
                        <a>Football</a>
                        <a>Training & Gym</a>
                        <a>Track & Field</a>
                        <a>Lacrosse</a>
                        </div>
                    </div>
                      
                    </div>
                </div>
                
                <div className="section">Women
                <div className="dropdownFeatured">
                    <div className="featuredDiv">
                    <div className="firstCol">
                        <div className="vday">
                        <h2>Valentines Day Shop</h2>
                        <a>Shop All ❤️</a>
                        <a>Gifts for Sneakerheads</a>
                        <a>Gifts Under $30</a>
                        </div>
                        <div className="limited">
                        <h2>Limited Time</h2>
                        <a>Last Chance Sale: Up to 40% Off</a>
                        </div>
                        </div>
                        <div className="new">
                        <h2>New & Featured</h2>
                        <a>New Arrivals</a>
                        <a>Best Sellers</a>
                        <a>Customize with Nike by You</a>
                        <a>Trending Color: Playful Pink</a>
                        </div>
                        <div className="shoes">
                        <h2>All Shoes</h2>
                        <a>Lifestyle</a>
                        <a>Jordan</a>
                        <a>Air Max</a>
                        <a>Air Force 1</a>
                        <a>Dunks & Blazers</a>
                        <a>Training & Gym</a>
                        <a>Basketball</a>
                        <a>Running</a>
                        <a>Sandals & Slides</a>
                        <a>Shoes $100 & Under</a>
                        </div>
                        <div className="clothing">
                        <h2>All Clothing</h2>
                        <a>Jordan</a>
                        <a>Matching Sets</a>
                        <a>Plus Size</a>
                        <a>Hoodies & Sweatshirts</a>
                        <a>Pants</a>
                        <a>Leggings</a>
                        <a>Bras</a>
                        <a>Jackets & Vests</a>
                        <a>Tops & T-Shirts</a>
                        <a>Shorts</a>
                        <a>Socks</a>
                        </div>
        
                        <div className="sport">
                        <h2>Shop by Sport</h2>
                        <a>Basketball</a>
                        <a>Golf</a>
                        <a>Soccer</a>
                        <a>Running</a>
                        <a>Tennis</a>
                        <a>Fitness</a>
                        <a>Yoga</a>
                        <a>Track & Field</a>
                        <a>Lacrosse</a>
                        <a>Softball</a>
                        <a>Dance</a>
                        </div>
                    </div>
                      
                    </div></div>
                <div className="section">Kids
                <div className="dropdownFeatured">
                    <div className="featuredDiv">
                    <div className="firstCol">
                        <div className="vday">
                        <h2>Valentines Day Shop</h2>
                        <a>Shop All ❤️</a>
                        <a>Gifts for Sneakerheads</a>
                        <a>Gifts Under $30</a>
                        </div>
                        <div className="limited">
                        <h2>Limited Time</h2>
                        <a>Last Chance Sale: Up to 40% Off</a>
                        </div>
                        </div>
                        <div className="new">
                        <h2>New & Featured</h2>
                        <a>New Arrivals</a>
                        <a>Best Sellers</a>
                        <a>Teen Girl Essentials</a>
                        <a>New in EasyOn Shoes</a>
                        </div>
                        <div className="shoes">
                        <div>
                            <h2>Shoes by Size</h2>
                            <a>Big Kids (1Y - 7Y)</a>
                            <a>Little Kids (8C - 3Y)</a>
                            <a>Baby & Toddler (1C - 10C)</a>
                        </div>
                        <div>
                        <h2>All Shoes</h2>
                        <a>Lifestyle</a>
                        <a>Jordan</a>
                        <a>Air Max</a>
                        <a>Air Force 1</a>
                        <a>Dunks & Blazers</a>
                        
                        <a>Basketball</a>
                        <a>Running</a>
                        <a>Sandals & Slides</a>
                        
                        </div>
                        
                        </div>
                        <div className="clothing">
                        <div>
                            <h2>Clothing by Size</h2>
                            <a>Big Kids (XS - XL)</a>
                            <a>Little Kids (4 - 7)</a>
                            <a>Baby & Toddler (0M - 4T)</a>
                            <a>Extended Sizing</a>
                        </div>
                        <div><h2>All Clothing</h2>
                        <a>Jordan</a>
                        <a>Matching Sets</a>
                        <a>Tops & T-Shirts</a>
                        <a>Shorts</a>
                        <a>Hoodies & Sweatshirts</a>
                        <a>Jackets & Vests</a>
                        <a>Pants & Tights</a>
                        <a>Bras</a>
                        <a>Socks</a>
                        </div>
                        </div>
        
                        <div className="sport">
                        <h2>Shop by Sport</h2>
                        <a>Basketball</a>
                        <a>Golf</a>
                        <a>Soccer</a>
                        <a>Running</a>
                        <a>Baseball</a>
                        <a>Football</a>
                        <a>Softball</a>
                        <a>Tennis</a>
                        <a>Lacrosse</a>
                        <a>Dance</a>
                        </div>
                    </div>
                      
                    </div></div>
                <div className="section">Accessories
                <div className="dropdownFeatured">
                    <div className="fourColumnDiv">
                        <div className="vday">
                        <h2>Valentines Day Shop</h2>
                        <a>Shop All ❤️</a>
                        <a>Gifts for Sneakerheads</a>
                        <a>Gifts Under $30</a>
                        </div>
                        <div >
                        <h2>Limited Time</h2>
                        <a>Last Chance Sale: Up to 40% Off</a>
                        </div>
                
                        
                        <div className="accessories">
                        <h2>All Accessories</h2>
                        <a>Socks</a>
                        <a>Bags & Backpacks</a>
                        <a>Hats & Headwear</a>
                        <a>Sunglasses & Eyewear</a>
                        <a>Water Bottles & Hydration</a>
                        <a>Gloves</a>
                        <a>Jordan</a>
                        </div>
        
                        <div className="sport">
                        <h2>Shop by Sport</h2>
                        <a>Basketball</a>
                        <a>Golf</a>
                        <a>Soccer</a>
                        <a>Running</a>
                        <a>Tennis</a>
                        <a>Baseball</a>
                        <a>Football</a>
                        <a>Training & Gym</a>
                        </div>
                    </div>
                      
                    </div></div>
                <div className="section">Sale
                <div className="dropdownFeatured">
                    <div className="fourColumnDiv">
                    <div className="firstCol">
                        
                        <div className="limited">
                        <h2>Limited Time</h2>
                        <a>Last Chance Sale: Up to 40% Off</a>
                        </div>
                        <div className="vday">
                        <h2>Valentines Day Shop</h2>
                        <a>Sale Shoes</a>
                        <a>Sale Clothing</a>
                        <a>Sale Accessories</a>
                        </div>
                        </div>
                        <div className="newMen">
                        <h2>Men</h2>
                        <a>Shoes</a>
                        <a>Clothing</a>
                        <a>Accessories</a>
                        <a>Shop All</a>
                        </div>
                        <div>
                        <h2>Women</h2>
                        <a>Shoes</a>
                        <a>Clothing</a>
                        <a>Accessories</a>
                        <a>Shop All</a>
                        </div>
                        <div>
                        <h2>Kids</h2>
                        <a>Shoes</a>
                        <a>Clothing</a>
                        <a>Accessories</a>
                        <a>Shop All</a>
                        </div>
                        </div>
            </div></div>
            </div>
            <div className="searchbox">
            <button>

            <svg width="28px" height="40px" viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(270)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12" stroke="#000000" strokeWidth="1.656" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
            <input type="text" placeholder="Search" ></input>
            </div>
            <button className="heart">
            {/* <svg width="32px" height="32px" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
            <svg width="28px" height="28px" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
            <button className="bag">
            {/* <svg width="32px" height="32px" viewBox="-1 -1 22.00 22.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -3079.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M302,2936.00957 C302,2936.55981 301.552,2937.00638 301,2937.00638 L287,2937.00638 C286.448,2937.00638 286,2936.55981 286,2936.00957 L286,2928.03509 C286,2927.48485 286.448,2927.03828 287,2927.03828 L301,2927.03828 C301.552,2927.03828 302,2927.48485 302,2928.03509 L302,2936.00957 Z M294,2920.98465 C296.259,2920.98465 298.221,2923.05104 298.813,2925.04466 L289.096,2925.04466 C289.543,2923.05104 291.604,2920.98465 294,2920.98465 L294,2920.98465 Z M302,2925.04466 L300.876,2925.04466 C300.265,2922.05423 297.367,2919 294,2919 C290.53,2919 287.56,2922.05423 287.077,2925.04466 L286,2925.04466 C284.895,2925.04466 284,2926.00159 284,2927.10207 L284,2937.07018 C284,2938.17165 284.895,2939 286,2939 L302,2939 C303.105,2939 304,2938.17165 304,2937.07018 L304,2927.10207 C304,2926.00159 303.105,2925.04466 302,2925.04466 L302,2925.04466 Z" id="shopping_bag-[#1142]"> </path> </g> </g> </g> </g></svg> */}
            <svg width="24px" height="24px" viewBox="-2 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>shopping_bag [#1142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -3079.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M302,2936.00957 C302,2936.55981 301.552,2937.00638 301,2937.00638 L287,2937.00638 C286.448,2937.00638 286,2936.55981 286,2936.00957 L286,2928.03509 C286,2927.48485 286.448,2927.03828 287,2927.03828 L301,2927.03828 C301.552,2927.03828 302,2927.48485 302,2928.03509 L302,2936.00957 Z M294,2920.98465 C296.259,2920.98465 298.221,2923.05104 298.813,2925.04466 L289.096,2925.04466 C289.543,2923.05104 291.604,2920.98465 294,2920.98465 L294,2920.98465 Z M302,2925.04466 L300.876,2925.04466 C300.265,2922.05423 297.367,2919 294,2919 C290.53,2919 287.56,2922.05423 287.077,2925.04466 L286,2925.04466 C284.895,2925.04466 284,2926.00159 284,2927.10207 L284,2937.07018 C284,2938.17165 284.895,2939 286,2939 L302,2939 C303.105,2939 304,2938.17165 304,2937.07018 L304,2927.10207 C304,2926.00159 303.105,2925.04466 302,2925.04466 L302,2925.04466 Z" id="shopping_bag-[#1142]"> </path> </g> </g> </g> </g></svg>
            </button>
        </div>
        <CarouselBanner />
        {/* <section style={{backgroundColor : "blue", height:"200vh"}} /> */}
        </>
    )
}

export default Header;