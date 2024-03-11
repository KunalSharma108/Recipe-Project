const elements = document.querySelectorAll('.custom-tooltip');

elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.position = 'relative';
        element.removeAttribute('title');
    });

    element.addEventListener('mouseout', () => {
        element.style.position = '';
    });
});

var typed = new Typed('.auto-type', {
    strings: [" 🍳 Welcome 👋 to Kunal's Kitchen 🍽️"],
    typeSpeed: 19,
    startDelay: 2000,
    showCursor: false,
    onComplete: function () {
        moreDesctoWelcome()
    }
});

function navbar_animation() {

    document.getElementById("search_input").style.width = "550px";
    document.getElementById("search_input").style.marginRight = "3%";
}

function moreDesctoWelcome() {
    const moreDesctoWelcome_content =
        ` 
        <p id="auto-desc" class="auto-desc">
        <span class="st"> <span class="emoji">🌟</span> Step into a world where flavors dance and aromas enchant – welcome to Kunal's Kitchen, where every recipe is a journey and every dish tells a story. We're delighted to have you here, ready to embark on a culinary adventure like no other.
        </span>
        <span class="st"><span class="emoji">🍲</span> At Kunal's Kitchen, we're more than just a collection of recipes; we're a community of food enthusiasts, passionate about sharing the joy of cooking. Whether you're a seasoned chef or a kitchen newbie, our diverse array of recipes caters to every taste, skill level, and craving.
        </span>
        <span class="st"><span class="emoji">👩‍🍳</span> Explore our carefully selection of dishes, from quick and easy weeknight dinners to desserts that celebrate life's sweet moments. Our step-by-step guides ensure that every recipe is not just a set of instructions but a personal cooking experience..
        </span>
        <span class="st"><span class="emoji">🍽️</span> Join us in celebrating the art of cooking, because in Kunal's Kitchen, every meal is an opportunity to create something extraordinary. Get ready to embark on a culinary journey that tantalizes your taste buds and inspires your inner chef.</span>
        </p> <p class="auto-button-p"> <a href="#recipe-selection-area" class="auto-button">lets get started! <span class="material-symbols-outlined down-arrow">arrow_downward</span></a> </p>
        `;

    document.getElementById("auto-type-p").innerHTML = moreDesctoWelcome_content;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function rtc_foodType(foodType) {
    let rtcContent = "";

    document.getElementById("rtc-Fcontent").innerHTML = " ";

    const vegButton = document.getElementById("veg");
    const nonVegbutton = document.getElementById("non-veg");

    const spinAnimation =
        `
        <div class="load" id="load">
            <div class="loader"></div>
        </div>
        `;

    const vegContent =
        `
        <label for="veg-items">Select further Veg items -> </label>
        <select name="veg-items" onchange="vegContent()" id="veg-items">
            <option value="" disabled selected class="select-option">select an option</option>
            <option value="bread" class="select-option">bread</option>
            <option value="potato" class="select-option">potato (only)</option>
            <option value="daal" class="select-option">dal (lentil) </option>
            <option value="Vegitables" class="select-option">Vegitables</option>
        </select>
        `;

    const nonVegcontent =
        `
        <label for="non-veg-items">Select further Non-Veg items -> </label>
        <select name="non-veg-items" onchange="nonVegcontent()" id="non-veg-items">
            <option value="" disabled selected class="select-option">select an option</option>
            <option value="egg" class="select-option">egg</option>
            <option value="chicken" class="select-option">Chicken</option>
            <option value="beef" class="select-option">beef</option>
            <option value="fishAndseafood" class="select-option">Fish and Seafood</option>
            <option value="pork" class="select-option">Pork</option>
        </select>
        `;

    vegButton.style.opacity = "0.2";
    nonVegbutton.style.opacity = "0.2";

    vegButton.style.cursor = "not-allowed";
    nonVegbutton.style.cursor = "not-allowed";

    vegButton.disabled = true;
    nonVegbutton.disabled = true;

    document.getElementById("rtc-content").innerHTML = spinAnimation;

    setTimeout(function () {
        const spinAnimationDiv = document.getElementById("load");

        spinAnimationDiv.style.display = "none";

        vegButton.style.opacity = "1";
        nonVegbutton.style.opacity = "1";

        vegButton.style.cursor = "pointer";
        nonVegbutton.style.cursor = "pointer";

        vegButton.disabled = false;
        nonVegbutton.disabled = false;


        if (foodType == 'veg') {
            vegButton.style.backgroundColor = "rgb(16, 16, 16)";
            nonVegbutton.style.backgroundColor = "rgba(255, 255, 255, 0.253)";
            rtcContent = vegContent;
        } else if (foodType == 'nonveg') {
            nonVegbutton.style.backgroundColor = "rgb(16, 16, 16)";
            vegButton.style.backgroundColor = "rgba(255, 255, 255, 0.253)";
            rtcContent = nonVegcontent;
        }


        document.getElementById("rtc-content").innerHTML = rtcContent;
    }, 1000);
}

function nonVegcontent() {
    const vegButton = document.getElementById("veg");
    const nonVegbutton = document.getElementById("non-veg");
    const nonVegbuttonSelect = document.getElementById('non-veg-items');
    const NonVegselectedvalue = document.getElementById("non-veg-items").value;

    vegButton.style.opacity = "0.2";
    nonVegbutton.style.opacity = "0.2";

    vegButton.style.cursor = "not-allowed";
    nonVegbutton.style.cursor = "not-allowed";

    vegButton.disabled = true;
    nonVegbutton.disabled = true;

    nonVegbuttonSelect.disabled = true;
    nonVegbuttonSelect.style.opacity = "0.2";
    nonVegbuttonSelect.style.cursor = "not-allowed";

    const spinAnimation =
        `<div class="load" id="load">
        <div class="loader"></div>
    </div>`;

    document.getElementById("rtc-Fcontent").innerHTML = spinAnimation;

    let NV_foodType_return = "";

    const NV_foodType_beef =
        `
        <p class="rfc-head">Select the available recipe of Beef -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Beef Tenderloin
            </p>

            <p class="F-recipe">
                Ribeye Steak
            </p>

            <p class="F-recipe">
                Sirloin Steak
            </p>

            <p class="F-recipe">
                Flank Steak
            </p>

            <p class="F-recipe">
                Skirt Steak
            </p>

            <p class="F-recipe">
                Chuck Roast
            </p>

            <p class="F-recipe">
                Brisket
            </p>

            <p class="F-recipe">
                Beef Short Ribs
            </p>

            <p class="F-recipe">
                Ground Beef (for various dishes)
            </p>

            <p class="F-recipe">
                Beef Stir-Fry Strips
            </p>

        </div>
        `;
    const NV_foodType_egg =
        `
        <p class="rfc-head">Select the available recipe of Egg -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Omelette 
            </p>

            <p class="F-recipe">
                Egg Salad Sandwich
            </p>

            <p class="F-recipe">
                Deviled Eggs
            </p>

            <p class="F-recipe">
                Shakshuka
            </p>

            <p class="F-recipe">
                Egg Curry
            </p>

            <p class="F-recipe">
                Egg Fried Rice
            </p>

            <p class="F-recipe">
                Egg Benedict
            </p>

            <p class="F-recipe">
                Cloud Eggs
            </p>

            <p class="F-recipe">
                Egg Drop Soup
            </p>

            <p class="F-recipe">
                Scrambled Egg Burrito
            </p>

        </div>
        `;
    const NV_foodType_chicken =
        `
        <p class="rfc-head">Select the available recipe of Chicken -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Chicken Alfredo Pasta 
            </p>

            <p class="F-recipe">
                Chicken Parmesan
            </p>

            <p class="F-recipe">
                Chicken Teriyaki
            </p>

            <p class="F-recipe">
                Chicken Marsala
            </p>

            <p class="F-recipe">
                Butter Chicken (Chicken Makhani)
            </p>

            <p class="F-recipe">
                Chicken Shawarma
            </p>

            <p class="F-recipe">
                Chicken Piccata
            </p>

            <p class="F-recipe">
                Grilled Chicken Salad
            </p>

            <p class="F-recipe">
                Honey Mustard Glazed Chicken
            </p>

            <p class="F-recipe">
                Chicken Enchiladas
            </p>

        </div>
        `;
    const NV_foodType_fishAndseafood =
        `
        <p class="rfc-head">Select the available recipe of Fish and Sea food -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Grilled Salmon
            </p>

            <p class="F-recipe">
                Baked Cod with Lemon and Herbs
            </p>

            <p class="F-recipe">
                Fish Tacos with Chipotle Crema
            </p>

            <p class="F-recipe">
                Lemon Garlic Butter Baked Tilapia
            </p>

            <p class="F-recipe">
                Coconut Curry Salmon
            </p>

            <p class="F-recipe">
                Shrimp Scampi
            </p>

            <p class="F-recipe">
                Lobster Bisque
            </p>

            <p class="F-recipe">
                Clam Chowder
            </p>

            <p class="F-recipe">
                Garlic Butter Shrimp Pasta
            </p>

            <p class="F-recipe">
                Scallop Risotto
            </p>

        </div>
        `;
    const NV_foodType_pork =
        `
        <p class="rfc-head">Select the available recipe of Pork -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Pork Tenderloin with Apple Cider Glaze
            </p>

            <p class="F-recipe">
                Pulled Pork Sandwiches
            </p>

            <p class="F-recipe">
                Pork Chops with Dijon Cream Sauce
            </p>

            <p class="F-recipe">
                Carnitas (Mexican Pulled Pork)
            </p>

            <p class="F-recipe">
                Honey Garlic Glazed Pork Ribs
            </p>

            <p class="F-recipe">
                Pork Stir-Fry with Vegetables
            </p>

            <p class="F-recipe">
                Maple Glazed Pork Belly
            </p>

            <p class="F-recipe">
                Grilled Pork Skewers
            </p>

            <p class="F-recipe">
                Italian Sausage and Peppers
            </p>

            <p class="F-recipe">
                Pork Schnitzel
            </p>

        </div>
        `;

    setTimeout(function () {
        const spinAnimationDiv = document.getElementById("load");
        spinAnimationDiv.style.display = "none";

        vegButton.style.opacity = "1";
        nonVegbutton.style.opacity = "1";

        vegButton.style.cursor = "pointer";
        nonVegbutton.style.cursor = "pointer";

        vegButton.disabled = false;
        nonVegbutton.disabled = false;

        nonVegbuttonSelect.style.opacity = "1";
        nonVegbuttonSelect.style.cursor = "pointer";
        nonVegbuttonSelect.disabled = false;

        switch (NonVegselectedvalue) {
            case "egg":
                NV_foodType_return = NV_foodType_egg;
                break
            case "beef":
                NV_foodType_return = NV_foodType_beef;
                break
            case "chicken":
                NV_foodType_return = NV_foodType_chicken;
                break
            case "fishAndseafood":
                NV_foodType_return = NV_foodType_fishAndseafood;
                break
            case "pork":
                NV_foodType_return = NV_foodType_pork;
                break
            default:
                NV_foodType_return = "Invalid input";
        }
        document.getElementById("rtc-Fcontent").innerHTML = NV_foodType_return;
        recipeShow()
    }, 1000);
}

function vegContent() {
    const vegButton = document.getElementById("veg");
    const nonVegbutton = document.getElementById("non-veg");
    const VegbuttonSelect = document.getElementById('veg-items');
    const vegSelectedvalue = document.getElementById("veg-items").value;

    vegButton.style.opacity = "0.2";
    nonVegbutton.style.opacity = "0.2";

    vegButton.style.cursor = "not-allowed";
    nonVegbutton.style.cursor = "not-allowed";

    vegButton.disabled = true;
    nonVegbutton.disabled = true;

    VegbuttonSelect.disabled = true;
    VegbuttonSelect.style.opacity = "0.2";
    VegbuttonSelect.style.cursor = "not-allowed";

    const spinAnimation =
        `<div class="load" id="load">
            <div class="loader"></div>
        </div>`;

    document.getElementById("rtc-Fcontent").innerHTML = spinAnimation;


    let NV_foodType_return = "";


    const NV_foodType_bread =
        `
        <p class="rfc-head">Select the available recipe of bread -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Basic Homemade Bread
            </p>

            <p class="F-recipe">
                Garlic Bread
            </p>

            <p class="F-recipe">
                French Baguette
            </p>

            <p class="F-recipe">
                Cinnamon Rolls
            </p>

            <p class="F-recipe">
                Pizza Dough
            </p>

            <p class="F-recipe">
                Banana Bread
            </p>

            <p class="F-recipe">
                Focaccia
            </p>

            <p class="F-recipe">
                Sourdough Bread
            </p>

            <p class="F-recipe">
                Pita Bread
            </p>

            <p class="F-recipe">
                Bagels
            </p>

        </div>
        `;
    const NV_foodType_potato =
        `
        <p class="rfc-head">Select the available recipe of potato -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Mashed Potatoes
            </p>

            <p class="F-recipe">
                Roasted Potatoes
            </p>

            <p class="F-recipe">
                Potato Salad
            </p>

            <p class="F-recipe">
                Baked Potato
            </p>

            <p class="F-recipe">
                French Fries
            </p>

            <p class="F-recipe">
                Potato Soup
            </p>

            <p class="F-recipe">
                Potato Pancakes (Latkes)
            </p>

            <p class="F-recipe">
                Scalloped Potatoes
            </p>

            <p class="F-recipe">
                Potato Gnocchi
            </p>

            <p class="F-recipe">
                Hasselback Potatoes
            </p>

        </div>
        `;
    const NV_foodType_daal =
        `
        <p class="rfc-head">Select the available recipe of dal -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Tadka Dal (Yellow Dal)
            </p>

            <p class="F-recipe">
                Dal Makhani
            </p>

            <p class="F-recipe">
                Chana Dal
            </p>

            <p class="F-recipe">
                Masoor Dal
            </p>

            <p class="F-recipe">
                Toor Dal (Arhar Dal)
            </p>

            <p class="F-recipe">
                Urad Dal (black Dal)
            </p>

            <p class="F-recipe">
                Moong Dal
            </p>

            <p class="F-recipe">
                Dal Tadka
            </p>

        </div>
        `;
    const NV_foodType_Vegitable =
        `
        <p class="rfc-head">Select the available recipe of Vegitables -:</p> <br>

        <div class="rtc-finalR">

            <p class="F-recipe">
                Roasted Vegetable Medley
            </p>

            <p class="F-recipe">
                Vegetarian Stir-Fry
            </p>

            <p class="F-recipe">
                Ratatouille
            </p>

            <p class="F-recipe">
                Grilled Portobello Mushrooms
            </p>

            <p class="F-recipe">
                Zucchini Noodles with Pesto
            </p>

            <p class="F-recipe">
                Stuffed Bell Peppers
            </p>

            <p class="F-recipe">
                Eggplant Parmesan
            </p>

            <p class="F-recipe">
                Spinach and Feta Stuffed Mushrooms
            </p>

            <p class="F-recipe">
                Veggie Curry
            </p>

            <p class="F-recipe">
                Caprese Salad
            </p>

        </div>
        `;

    setTimeout(function () {
        const spinAnimationDiv = document.getElementById("load");
        spinAnimationDiv.style.display = "none";

        vegButton.style.opacity = "1";
        nonVegbutton.style.opacity = "1";

        vegButton.style.cursor = "pointer";
        nonVegbutton.style.cursor = "pointer";

        vegButton.disabled = false;
        nonVegbutton.disabled = false;

        VegbuttonSelect.style.opacity = "1";
        VegbuttonSelect.style.cursor = "pointer";
        VegbuttonSelect.disabled = false;

        switch (vegSelectedvalue) {
            case "bread":
                NV_foodType_return = NV_foodType_bread;
                break;
            case "potato":
                NV_foodType_return = NV_foodType_potato;
                break;
            case "daal":
                NV_foodType_return = NV_foodType_daal;
                break;
            case "Vegitables":
                NV_foodType_return = NV_foodType_Vegitable;
                break;
            default:
                NV_foodType_return = `<p> invalid input </p>`;
        }
        document.getElementById("rtc-Fcontent").innerHTML = NV_foodType_return;
        recipeShow()
    }, 1000);
}

const recipeIng = {
    // -----------------------------------------------------Veg Items-------------------------------------------------------


    // -------------------------------------------------------Bread------------------------------------------------------ 
    'Basic Homemade Bread':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>All-purpose flour</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sugar</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Active dry yeast</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>1 1/2 teaspoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Warm water (110°F/43°C)</td>
                    <td>1 1/2 cups</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Olive oil (optional, for a softer crust)</td>
                    <td>2 tablespoons</td>
                </tr>
            </table>

        </div>
    </div>

    <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Activate the yeast:</div>
                        <div class="ins-content-p">
                            In a small bowl, combine the warm water and sugar. Stir until the sugar is
                            dissolved. Sprinkle the yeast over the water and let it sit for about 5-10 minutes,
                            or until it becomes foamy. This indicates that the yeast is active.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mix dry ingredients:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine the flour and salt.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine wet and dry ingredients:</div>
                        <div class="ins-content-p">
                            Make a well in the center of the flour mixture and pour in the activated yeast mixture.
                            If you're using olive oil or melted butter, add it to the bowl as well. Mix until the dough comes together.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Knead the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough onto a floured surface and knead for about 8-10 minutes, or until the
                            dough becomes smooth and elastic. You can also use a stand mixer with a dough hook for this step.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">First rise:</div>
                        <div class="ins-content-p">
                            Place the dough in a lightly oiled bowl, cover it with a damp cloth or plastic wrap, and let it rise in a warm place
                            for about 1-2 hours or until it doubles in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Punch down and shape:</div>
                        <div class="ins-content-p">
                            After the first rise, punch down the dough to release any air bubbles. Turn it onto a floured surface and shape it into a loaf.
                            You can use a loaf pan or shape it into a free-form loaf.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Second rise:</div>
                        <div class="ins-content-p">
                            Place the shaped dough back into the pan or on a baking sheet, cover it, and let it rise for another 30-60 minutes,
                            or until it doubles in size again.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Bake the bread in the preheated oven for 25-30 minutes, or until it's golden brown and sounds hollow when tapped on the bottom.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cool:</div>
                        <div class="ins-content-p">
                            Allow the bread to cool on a wire rack before slicing.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>

    `,

    'Garlic Bread':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>French bread or baguette</td>
                    <td>1 loaf</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Butter, softened</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Garlic cloves, minced</td>
                    <td>3-4 cloves</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Fresh parsley, chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Grated Parmesan cheese</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the garlic butter:</div>
                        <div class="ins-content-p">
                            In a small bowl, combine softened butter, minced garlic, chopped parsley, and a pinch of salt.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice the bread:</div>
                        <div class="ins-content-p">
                            Cut a baguette or Italian bread into slices, making sure not to cut all the way through, keeping the slices attached at the bottom.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Spread the garlic butter:</div>
                        <div class="ins-content-p">
                            Using a butter knife, spread the garlic butter mixture between the slices and on the top of the bread.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Wrap in foil:</div>
                        <div class="ins-content-p">
                            Wrap the garlic bread in aluminum foil, leaving the top exposed.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Place the wrapped garlic bread in the preheated oven and bake for 15-20 minutes or until the butter is melted and the bread is heated through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Broil (optional):</div>
                        <div class="ins-content-p">
                            If you like a crispy top, unwrap the bread and broil for an additional 2-3 minutes until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Remove from the oven, unwrap, and serve the garlic bread warm. Enjoy!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'French Baguette':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>All-purpose flour</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Warm water</td>
                    <td>1 1/2 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Active dry yeast</td>
                    <td>2 teaspoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>1 1/2 teaspoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Olive oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Sugar</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Cornmeal (for dusting, optional)</td>
                    <td></td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Mix the dough:</div>
                        <div class="ins-content-p">
                            In a large bowl, combine flour, salt, and yeast. Make a well in the center and add warm water. Mix until a sticky dough forms.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Knead the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough onto a floured surface and knead for about 10-15 minutes, or until the dough is smooth and elastic.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">First rise:</div>
                        <div class="ins-content-p">
                            Place the dough in a lightly oiled bowl, cover it with a damp cloth or plastic wrap, and let it rise in a warm place for about 1-2 hours or until it doubles in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Shape the baguette:</div>
                        <div class="ins-content-p">
                            After the first rise, turn the dough onto a floured surface. Divide it into equal portions and shape each portion into a long, thin baguette.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Second rise:</div>
                        <div class="ins-content-p">
                            Place the shaped baguettes on a floured surface or a baguette pan. Cover and let them rise for another 30-45 minutes, or until they have doubled in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 450°F (230°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Score the baguettes:</div>
                        <div class="ins-content-p">
                            Using a sharp knife or a razor blade, make diagonal slashes on the top of each baguette.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Bake the baguettes in the preheated oven for 20-25 minutes, or until they are golden brown and sound hollow when tapped on the bottom.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cool:</div>
                        <div class="ins-content-p">
                            Allow the baguettes to cool on a wire rack before slicing. Enjoy your homemade French baguette!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Cinnamon Rolls':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>All-purpose flour</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Active dry yeast</td>
                    <td>1 package (2 1/4 teaspoons)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Warm milk</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Granulated sugar</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Unsalted butter, softened</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Egg</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Salt</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>For the Filling:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Brown sugar</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Ground cinnamon</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Unsalted butter, melted</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>For the Cream Cheese Frosting:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Cream cheese, softened</td>
                    <td>4 ounces</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Unsalted butter, softened</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Confectioners' sugar</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Vanilla extract</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Salt</td>
                    <td>Pinch</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Make the dough:</div>
                        <div class="ins-content-p">
                            In a mixing bowl, combine warm milk, melted butter, sugar, and yeast. Let it sit for 5-10 minutes until foamy. Add flour and salt. Mix until a soft dough forms.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Knead the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough onto a floured surface and knead for about 5-7 minutes, or until it becomes smooth and elastic.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">First rise:</div>
                        <div class="ins-content-p">
                            Place the dough in a greased bowl, cover it with a damp cloth, and let it rise in a warm place for about 1-2 hours or until it doubles in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roll out the dough:</div>
                        <div class="ins-content-p">
                            After the first rise, roll out the dough on a floured surface into a rectangle of about 16x12 inches.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the cinnamon filling:</div>
                        <div class="ins-content-p">
                            In a small bowl, mix softened butter, brown sugar, and ground cinnamon. Spread the mixture evenly over the rolled-out dough.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roll up the dough:</div>
                        <div class="ins-content-p">
                            Starting from the long side, roll the dough tightly into a log. Pinch the seam to seal.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cut into rolls:</div>
                        <div class="ins-content-p">
                            Using a sharp knife or dental floss, cut the rolled dough into 12 equal slices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Second rise:</div>
                        <div class="ins-content-p">
                            Place the cinnamon rolls in a greased baking pan, cover, and let them rise for another 30-45 minutes, or until they have doubled in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Bake the cinnamon rolls in the preheated oven for 20-25 minutes, or until they are golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the icing:</div>
                        <div class="ins-content-p">
                            While the rolls are baking, prepare the icing by mixing powdered sugar, softened cream cheese, vanilla extract, and milk.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Ice the rolls:</div>
                        <div class="ins-content-p">
                            Once the cinnamon rolls are out of the oven, drizzle the icing over them while they are still warm. Serve and enjoy!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Pizza Dough':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>All-purpose flour</td>
                    <td>3 1/2 to 4 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Warm water</td>
                    <td>1 1/2 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Active dry yeast</td>
                    <td>2 1/4 teaspoons (1 packet)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Granulated sugar</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Olive oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>1 1/2 teaspoons</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Activate the yeast:</div>
                        <div class="ins-content-p">
                            In a bowl, combine warm water, sugar, and active dry yeast. Let it sit for about 5-10 minutes until it becomes frothy, indicating that the yeast is active.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the dough:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine flour and salt. Make a well in the center and pour in the activated yeast mixture. Add olive oil.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Knead the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough onto a floured surface and knead for about 8-10 minutes, or until the dough is smooth and elastic.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">First rise:</div>
                        <div class="ins-content-p">
                            Place the dough in a lightly oiled bowl, cover it with a damp cloth or plastic wrap, and let it rise in a warm place for about 1-1.5 hours, or until it doubles in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Punch down the dough:</div>
                        <div class="ins-content-p">
                            After the first rise, punch down the dough to release any air bubbles. Divide the dough into two portions for two pizza crusts.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Second rise (optional):</div>
                        <div class="ins-content-p">
                            If time allows, let the divided dough portions rise again for 15-30 minutes for a slightly lighter crust.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roll out the dough:</div>
                        <div class="ins-content-p">
                            On a floured surface, roll out each dough portion into the desired thickness for your pizza crust.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to the highest temperature it can go (usually around 475°F - 500°F or 245°C - 260°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add toppings:</div>
                        <div class="ins-content-p">
                            Place the rolled-out dough on a pizza stone or baking sheet. Add your favorite pizza sauce, cheese, and toppings.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Bake the pizza in the preheated oven for 10-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy your homemade pizza!</div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Banana Bread':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ripe bananas, mashed</td>
                    <td>2 to 3 (about 1 1/2 cups)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Granulated sugar</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Large eggs</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Unsalted butter, melted</td>
                    <td>1/3 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Milk</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Vanilla extract</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>All-purpose flour</td>
                    <td>1 1/2 cups</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Baking soda</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Chopped nuts (optional)</td>
                    <td>1/2 cup</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 350°F (175°C). Grease and flour a loaf pan.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mash the bananas:</div>
                        <div class="ins-content-p">
                            In a bowl, mash ripe bananas with a fork until smooth. You'll need about 2-3 ripe bananas.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mix wet ingredients:</div>
                        <div class="ins-content-p">
                            In a large bowl, combine the mashed bananas, melted butter, beaten eggs, vanilla extract, and yogurt.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mix dry ingredients:</div>
                        <div class="ins-content-p">
                            In a separate bowl, whisk together the flour, baking soda, salt, and cinnamon.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine wet and dry ingredients:</div>
                        <div class="ins-content-p">
                            Add the dry ingredients to the wet ingredients and stir until just combined. Do not overmix.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add nuts or chocolate chips (optional):</div>
                        <div class="ins-content-p">
                            If desired, fold in chopped nuts or chocolate chips into the batter.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Pour into the pan:</div>
                        <div class="ins-content-p">
                            Pour the batter into the prepared loaf pan, spreading it evenly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Bake in the preheated oven for 60-70 minutes, or until a toothpick inserted into the center comes out clean.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cool:</div>
                        <div class="ins-content-p">
                            Allow the banana bread to cool in the pan for 10 minutes, then transfer it to a wire rack to cool completely.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice and serve:</div>
                        <div class="ins-content-p">
                            Once cooled, slice the banana bread and enjoy! It's delicious served warm or at room temperature.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Focaccia':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>All-purpose flour</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Warm water</td>
                    <td>1 1/2 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Active dry yeast</td>
                    <td>2 teaspoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Olive oil</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Salt</td>
                    <td>2 teaspoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Sugar</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Rosemary leaves (fresh or dried)</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Sea salt</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Optional Toppings:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Cherry tomatoes, halved</td>
                    <td></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Kalamata olives, pitted and halved</td>
                    <td></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Red onion, thinly sliced</td>
                    <td></td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Activate the yeast:</div>
                        <div class="ins-content-p">
                            In a bowl, combine warm water, sugar, and active dry yeast. Let it sit for about 5-10 minutes until it becomes frothy, indicating that the yeast is active.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the dough:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine flour, salt, and olive oil. Add the activated yeast mixture and mix until a soft dough forms.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Knead the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough onto a floured surface and knead for about 8-10 minutes, or until the dough is smooth and elastic.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">First rise:</div>
                        <div class="ins-content-p">
                            Place the dough in a lightly oiled bowl, cover it with a damp cloth or plastic wrap, and let it rise in a warm place for about 1-2 hours or until it doubles in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 425°F (220°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the baking pan:</div>
                        <div class="ins-content-p">
                            Grease a baking pan with olive oil. Transfer the risen dough to the pan and gently press it out to cover the bottom.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Second rise:</div>
                        <div class="ins-content-p">
                            Cover the dough in the pan and let it rise for another 20-30 minutes, allowing it to become slightly puffy.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Create dimples:</div>
                        <div class="ins-content-p">
                            Use your fingers to create dimples in the dough. Drizzle additional olive oil over the surface and sprinkle with coarse salt and any desired toppings like rosemary or cherry tomatoes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Bake in the preheated oven for 20-25 minutes, or until the focaccia is golden brown and has a crispy crust.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cool:</div>
                        <div class="ins-content-p">
                            Allow the focaccia to cool slightly before slicing. Serve warm and enjoy your homemade focaccia!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Sourdough Bread':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Sourdough starter</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bread flour</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Water</td>
                    <td>1 1/2 cups</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>1 1/2 teaspoons</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Create the sourdough starter:</div>
                        <div class="ins-content-p">
                            Mix equal parts of flour and water in a jar. Cover with a cloth and let it sit at room temperature for 3-5 days, stirring daily, until it becomes bubbly and has a sour smell.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the levain:</div>
                        <div class="ins-content-p">
                            In a bowl, mix a portion of your sourdough starter with flour and water to create the levain. Let it ferment at room temperature for 8-12 hours or until it's bubbly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mix the dough:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine flour, water, and salt. Add the levain to the mixture. Mix until a sticky dough forms.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bulk fermentation:</div>
                        <div class="ins-content-p">
                            Cover the bowl with a damp cloth and let the dough ferment at room temperature for 4-6 hours, folding the dough every 30 minutes during the first 2 hours.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Shape the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough onto a floured surface and shape it into a round loaf. Place it in a floured proofing basket or bowl, seam side down.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Final rise:</div>
                        <div class="ins-content-p">
                            Cover the shaped dough and let it rise in the refrigerator for 8-12 hours or overnight.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 450°F (230°C). Place a Dutch oven with the lid on in the oven to preheat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Carefully transfer the risen dough into the preheated Dutch oven. Score the top with a sharp knife. Cover with the lid and bake for 20 minutes. Remove the lid and bake for an additional 20-25 minutes or until the crust is golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cool:</div>
                        <div class="ins-content-p">
                            Allow the sourdough bread to cool on a wire rack before slicing. Enjoy your homemade sourdough!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Pita Bread':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>All-purpose flour</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Warm water</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Active dry yeast</td>
                    <td>1 packet (2 1/4 teaspoons)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Sugar</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Salt</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Olive oil</td>
                    <td>1 tablespoon</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the dough:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine flour, salt, sugar, and yeast. Add warm water and olive oil. Mix until the dough comes together.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Knead the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough onto a floured surface and knead for about 5-7 minutes, or until it becomes smooth and elastic.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">First rise:</div>
                        <div class="ins-content-p">
                            Place the dough in a lightly oiled bowl, cover it with a damp cloth or plastic wrap, and let it rise in a warm place for about 1-1.5 hours or until it doubles in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to the highest temperature it can go (usually around 500°F or 260°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Divide and shape:</div>
                        <div class="ins-content-p">
                            Punch down the risen dough and divide it into equal-sized portions. Roll each portion into a ball and then flatten it into a disc shape on a floured surface.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Second rise:</div>
                        <div class="ins-content-p">
                            Cover the flattened dough portions and let them rise for another 15-20 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat a baking surface:</div>
                        <div class="ins-content-p">
                            Preheat a baking stone, baking sheet, or cast-iron skillet in the oven.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Place the flattened dough portions on the preheated surface and bake for 3-5 minutes, or until they puff up and develop a golden-brown color.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cool:</div>
                        <div class="ins-content-p">
                            Remove the pita bread from the oven and let it cool slightly before serving. Pita bread is best enjoyed fresh!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>
    `,

    'Bagels':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Bread flour</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Warm water</td>
                    <td>1 1/4 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Active dry yeast</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Granulated sugar</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Salt</td>
                    <td>1 1/2 teaspoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Water for boiling</td>
                    <td>2 quarts</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Baking soda</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Egg (for egg wash)</td>
                    <td>1 (optional)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Sesame seeds or poppy seeds (optional, for topping)</td>
                    <td></td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Activate the yeast:</div>
                        <div class="ins-content-p">
                            In a bowl, combine warm water, sugar, and active dry yeast. Let it sit for about 5 minutes until it becomes frothy, indicating that the yeast is active.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mix the dough:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine flour, salt, and the activated yeast mixture. Knead the dough for about 10 minutes, or until it becomes smooth and elastic.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">First rise:</div>
                        <div class="ins-content-p">
                            Place the dough in a lightly oiled bowl, cover it with a damp cloth or plastic wrap, and let it rise in a warm place for about 1-1.5 hours or until it doubles in size.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Punch down and shape:</div>
                        <div class="ins-content-p">
                            Punch down the risen dough and divide it into equal-sized portions. Shape each portion into a smooth ball. Make a hole in the center of each ball to form the bagel shape.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Second rise:</div>
                        <div class="ins-content-p">
                            Place the shaped bagels on a floured surface, cover, and let them rise for another 30-45 minutes, or until they have slightly puffed up.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 425°F (220°C). Bring a large pot of water to a boil and add sugar.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Boil the bagels:</div>
                        <div class="ins-content-p">
                            Carefully place the risen bagels into the boiling water for about 1-2 minutes per side. This helps set the crust.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional toppings:</div>
                        <div class="ins-content-p">
                            If desired, add toppings such as sesame seeds, poppy seeds, or everything bagel seasoning.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Transfer the boiled bagels to a baking sheet and bake in the preheated oven for 20-25 minutes, or until they are golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cool:</div>
                        <div class="ins-content-p">
                            Allow the bagels to cool on a wire rack before slicing. Enjoy your homemade bagels!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    //-----------------------------------------------------------potato----------------------------------------------------- 

    'Mashed Potatoes':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Potatoes (russet or Yukon Gold)</td>
                    <td>2 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Butter</td>
                    <td>1/2 cup (1 stick)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Milk</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic powder (optional)</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chopped fresh parsley (optional, for garnish)</td>
                    <td></td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Peel and chop potatoes:</div>
                        <div class="ins-content-p">
                            Peel and chop the potatoes into evenly sized chunks.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Boil the potatoes:</div>
                        <div class="ins-content-p">
                            Place the chopped potatoes in a large pot, cover them with cold water, and add a pinch of salt. Bring to a boil and simmer until the potatoes are fork-tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drain and return to the pot:</div>
                        <div class="ins-content-p">
                            Drain the cooked potatoes and return them to the pot.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mash the potatoes:</div>
                        <div class="ins-content-p">
                            Use a potato masher or fork to mash the potatoes until smooth.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Warm the milk and butter:</div>
                        <div class="ins-content-p">
                            In a separate pan, warm the milk and melt the butter.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add milk and butter:</div>
                        <div class="ins-content-p">
                            Gradually add the warm milk and melted butter to the mashed potatoes, stirring continuously until well combined.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season with salt and pepper:</div>
                        <div class="ins-content-p">
                            Season the mashed potatoes with salt and pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            For extra flavor, consider adding garlic, herbs, or grated cheese to the mashed potatoes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Transfer the mashed potatoes to a serving bowl and enjoy this classic side dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Roasted Potatoes':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Potatoes (russet or baby potatoes)</td>
                    <td>2 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Garlic powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Thyme (dried or fresh)</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Rosemary (dried or fresh)</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 425°F (220°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Clean and chop potatoes:</div>
                        <div class="ins-content-p">
                            Wash and scrub the potatoes. Cut them into bite-sized chunks or wedges.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the potatoes:</div>
                        <div class="ins-content-p">
                            In a large bowl, toss the chopped potatoes with olive oil, salt, pepper, and any desired herbs or spices. Mix well to coat the potatoes evenly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Spread on a baking sheet:</div>
                        <div class="ins-content-p">
                            Spread the seasoned potatoes in a single layer on a baking sheet lined with parchment paper or lightly greased.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roast in the oven:</div>
                        <div class="ins-content-p">
                            Roast the potatoes in the preheated oven for 30-40 minutes, or until they are golden brown and crispy. Flip the potatoes halfway through the cooking time for even browning.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Consider adding minced garlic, rosemary, thyme, or grated Parmesan cheese during the last 10 minutes of roasting for added flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Once roasted to perfection, transfer the potatoes to a serving dish and enjoy these delicious roasted potatoes as a side dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Potato Salad':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Potatoes (russet or Yukon Gold)</td>
                    <td>2 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mayonnaise</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Dijon mustard</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Apple cider vinegar</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Red onion, finely chopped</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Celery, finely chopped</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Dill pickles, finely chopped</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Fresh dill, chopped</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Boil the potatoes:</div>
                        <div class="ins-content-p">
                            Place the whole potatoes in a pot of salted water. Bring to a boil and simmer until the potatoes are fork-tender. Drain and let them cool.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Chop and cool:</div>
                        <div class="ins-content-p">
                            Once the potatoes are cool enough to handle, chop them into bite-sized cubes. Allow them to cool completely.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare other ingredients:</div>
                        <div class="ins-content-p">
                            Chop hard-boiled eggs, celery, red onion, and fresh parsley. Optionally, add diced pickles or relish for extra flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the dressing:</div>
                        <div class="ins-content-p">
                            In a separate bowl, mix mayonnaise, Dijon mustard, white wine vinegar, salt, and pepper to make the dressing.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine ingredients:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine the chopped potatoes, hard-boiled eggs, celery, red onion, and parsley. Pour the dressing over the mixture and gently toss until everything is well coated.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Chill and serve:</div>
                        <div class="ins-content-p">
                            Cover the potato salad and refrigerate for at least 1-2 hours to allow the flavors to meld. Serve chilled and enjoy!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Garnish with additional fresh parsley or a sprinkle of paprika before serving.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Baked Potato':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Russet potatoes</td>
                    <td>4 medium-sized</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Butter</td>
                    <td>Optional, for serving</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Sour cream</td>
                    <td>Optional, for serving</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chives, chopped</td>
                    <td>Optional, for garnish</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Grated cheese</td>
                    <td>Optional, for topping</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Bacon bits</td>
                    <td>Optional, for topping</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 425°F (220°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Clean the potatoes:</div>
                        <div class="ins-content-p">
                            Scrub the potatoes thoroughly to remove any dirt. Pat them dry with a clean towel.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prick the potatoes:</div>
                        <div class="ins-content-p">
                            Use a fork to prick each potato several times. This allows steam to escape during baking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rub with oil and season:</div>
                        <div class="ins-content-p">
                            Rub each potato with olive oil and season with salt. You can also add a pinch of pepper or your favorite herbs.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Place the potatoes directly on the oven rack or on a baking sheet. Bake for 45-60 minutes or until the potatoes are tender when pierced with a fork.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional toppings:</div>
                        <div class="ins-content-p">
                            Once baked, slice the potatoes open and fluff the insides with a fork. Add your favorite toppings such as butter, sour cream, cheese, chives, or bacon.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the baked potatoes hot and enjoy this simple and versatile side dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'French Fries':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Potatoes (russet or Idaho)</td>
                    <td>4 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Vegetable oil</td>
                    <td>2-3 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Optional Seasonings:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Onion powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cayenne pepper</td>
                    <td>Optional, to taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Select and wash potatoes:</div>
                        <div class="ins-content-p">
                            Choose Russet or Idaho potatoes for the best texture. Wash and peel the potatoes if desired, or leave the skin on for a more rustic look.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cut into fries:</div>
                        <div class="ins-content-p">
                            Cut the potatoes into evenly sized matchsticks or wedges. Aim for a thickness of about 1/4 inch (0.6 cm).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Soak in cold water:</div>
                        <div class="ins-content-p">
                            Place the cut potatoes in a bowl of cold water and let them soak for at least 30 minutes. This helps remove excess starch for crispier fries.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oil:</div>
                        <div class="ins-content-p">
                            Preheat your cooking oil (such as vegetable or peanut oil) in a deep fryer or large pot to 350°F (175°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drain and pat dry:</div>
                        <div class="ins-content-p">
                            Drain the soaked potatoes and pat them dry with a clean kitchen towel or paper towels.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fry in batches:</div>
                        <div class="ins-content-p">
                            Carefully add the potatoes to the hot oil in batches. Fry until golden brown and crispy, about 3-4 minutes per batch.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Remove and drain:</div>
                        <div class="ins-content-p">
                            Use a slotted spoon to remove the fries from the oil and place them on a plate lined with paper towels to drain excess oil.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season and serve:</div>
                        <div class="ins-content-p">
                            Season the hot fries with salt immediately. Serve them hot and enjoy your homemade French fries!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Potato Soup':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Potatoes (russet or Yukon Gold)</td>
                    <td>4 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Onion, diced</td>
                    <td>1 medium</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Celery, diced</td>
                    <td>2 stalks</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Carrots, diced</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Chicken or vegetable broth</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Milk</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Butter</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>All-purpose flour</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Bay leaves</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Thyme (dried or fresh)</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Heavy cream</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Cheddar cheese, shredded</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Green onions, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Ingredients preparation:</div>
                        <div class="ins-content-p">
                            Gather and prepare ingredients - potatoes (peeled and diced), onion (chopped), garlic (minced), chicken or vegetable broth, butter, milk, salt, pepper, and optional toppings like shredded cheese, chives, or bacon.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Saute onions and garlic:</div>
                        <div class="ins-content-p">
                            In a large pot, melt butter over medium heat. Add chopped onions and minced garlic. Saute until the onions are translucent and fragrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add potatoes and broth:</div>
                        <div class="ins-content-p">
                            Add the diced potatoes to the pot and pour in enough chicken or vegetable broth to cover the potatoes. Bring to a boil and then reduce the heat to simmer until the potatoes are tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Mash or blend:</div>
                        <div class="ins-content-p">
                            Use a potato masher or blender to mash or blend the soup to your desired consistency. For a chunky soup, mash only some of the potatoes. For a creamier texture, blend a portion of the soup.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add milk and season:</div>
                        <div class="ins-content-p">
                            Stir in milk to reach your preferred thickness. Season the soup with salt and pepper to taste. Adjust the seasoning as needed.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Simmer and serve:</div>
                        <div class="ins-content-p">
                            Allow the soup to simmer for a few more minutes to let the flavors meld. Serve hot, garnished with shredded cheese, chopped chives, or crispy bacon if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Ladle the delicious potato soup into bowls and enjoy a comforting and hearty meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Potato Pancakes (Latkes)':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Russet potatoes, peeled</td>
                    <td>4 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Onion</td>
                    <td>1 medium</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Eggs</td>
                    <td>2 large</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>All-purpose flour</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Baking powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Vegetable oil</td>
                    <td>1/2 cup (for frying)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Applesauce or sour cream (for serving)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Grate the potatoes and onions:</div>
                        <div class="ins-content-p">
                            Peel and grate the potatoes and onions. You can use a box grater or a food processor for quicker results. Place the grated mixture in a clean kitchen towel and squeeze out excess moisture.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine ingredients:</div>
                        <div class="ins-content-p">
                            In a large bowl, combine the grated potatoes and onions. Add beaten eggs, flour, salt, and pepper. Mix until well combined.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Heat the oil:</div>
                        <div class="ins-content-p">
                            Heat vegetable oil in a frying pan over medium-high heat. The oil should be hot enough to sizzle when a small amount of batter is dropped into it.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Form pancakes:</div>
                        <div class="ins-content-p">
                            Scoop a spoonful of the potato mixture and carefully place it in the hot oil, flattening it with the back of the spoon to form a pancake. Repeat for as many pancakes as can fit in the pan without overcrowding.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fry until golden brown:</div>
                        <div class="ins-content-p">
                            Fry the pancakes on each side until they are golden brown and crispy, about 3-4 minutes per side. Use a spatula to flip them.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drain excess oil:</div>
                        <div class="ins-content-p">
                            Once cooked, transfer the latkes to a plate lined with paper towels to drain excess oil.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve hot:</div>
                        <div class="ins-content-p">
                            Serve the potato pancakes hot with your favorite toppings such as applesauce or sour cream. Enjoy this classic dish!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Garnish with chopped chives or parsley before serving for extra flavor and presentation.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Scalloped Potatoes':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Russet potatoes, peeled and thinly sliced</td>
                    <td>4 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Butter</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>All-purpose flour</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Onion, finely chopped</td>
                    <td>1 medium</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Milk</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Cheddar cheese, shredded</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Fresh thyme, chopped</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Grated Parmesan cheese</td>
                    <td>2 tablespoons</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 350°F (175°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice the potatoes:</div>
                        <div class="ins-content-p">
                            Wash and peel the potatoes if desired. Slice them into thin rounds, about 1/8 inch (3 mm) thick.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the creamy sauce:</div>
                        <div class="ins-content-p">
                            In a saucepan, melt butter over medium heat. Add flour and stir until well combined. Gradually whisk in milk, continuing to stir to avoid lumps. Cook the sauce until it thickens.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add seasonings:</div>
                        <div class="ins-content-p">
                            Season the creamy sauce with salt, pepper, and optional ingredients like garlic powder, onion powder, or thyme for added flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Layer the potatoes:</div>
                        <div class="ins-content-p">
                            In a greased baking dish, layer the sliced potatoes. Pour a portion of the creamy sauce over each layer.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Repeat layers:</div>
                        <div class="ins-content-p">
                            Continue layering the potatoes and pouring the sauce until all the potatoes are used. Ensure the top layer is coated with the sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Cover the baking dish with foil and bake in the preheated oven for about 60-75 minutes, or until the potatoes are tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional cheese topping:</div>
                        <div class="ins-content-p">
                            If desired, uncover the dish during the last 15 minutes of baking and sprinkle shredded cheese on top. Bake until the cheese is melted and bubbly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Allow the scalloped potatoes to rest for a few minutes before serving. Enjoy this creamy and comforting side dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Potato Gnocchi':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Potatoes (russet or Yukon Gold)</td>
                    <td>2 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Egg</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>All-purpose flour</td>
                    <td>2 cups (plus more for dusting)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Nutmeg, freshly grated</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Butter</td>
                    <td>4 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Sage leaves</td>
                    <td>8-10 leaves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Salted boiling water</td>
                    <td>For cooking</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Grated Parmesan cheese</td>
                    <td>For serving</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Cook and mash the potatoes:</div>
                        <div class="ins-content-p">
                            Boil peeled potatoes until fork-tender. Drain and mash the potatoes while they are still warm. Allow them to cool slightly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add flour and egg:</div>
                        <div class="ins-content-p">
                            Add all-purpose flour, salt, and a beaten egg to the mashed potatoes. Mix until the ingredients come together to form a soft dough.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Knead the dough:</div>
                        <div class="ins-content-p">
                            Turn the dough out onto a floured surface and knead it gently. Be careful not to overwork the dough; it should be smooth and slightly sticky.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Divide into portions:</div>
                        <div class="ins-content-p">
                            Divide the dough into smaller portions. Roll each portion into a long rope, about 1/2 inch (1.3 cm) in diameter.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cut into gnocchi:</div>
                        <div class="ins-content-p">
                            Cut the ropes into bite-sized pieces, each about 1 inch (2.5 cm) long. Optionally, use a fork to create ridges on the gnocchi for texture.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Boil the gnocchi:</div>
                        <div class="ins-content-p">
                            Bring a large pot of salted water to a boil. Drop the gnocchi into the boiling water and cook until they float to the surface, indicating they are cooked.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional pan-searing:</div>
                        <div class="ins-content-p">
                            For a crispy texture, you can pan-sear the boiled gnocchi in butter or olive oil until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the potato gnocchi with your favorite sauce, such as marinara, pesto, or browned butter with sage. Enjoy this delicious homemade pasta!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and enjoy:</div>
                        <div class="ins-content-p">
                            Garnish with grated Parmesan cheese, fresh herbs, or additional sauce before serving. Enjoy your homemade potato gnocchi!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Hasselback Potatoes':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Russet potatoes</td>
                    <td>4 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Butter</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Fresh thyme, chopped</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Grated Parmesan cheese</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Breadcrumbs</td>
                    <td>1/4 cup</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 425°F (220°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the potatoes:</div>
                        <div class="ins-content-p">
                            Wash and scrub the potatoes thoroughly. Pat them dry with a clean kitchen towel.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice the potatoes:</div>
                        <div class="ins-content-p">
                            Place each potato on a cutting board and make thin slices along the length of the potato, about 1/8 inch (3 mm) apart. Be careful not to cut all the way through; leave the bottom intact.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Create herb butter:</div>
                        <div class="ins-content-p">
                            In a small saucepan, melt butter and add minced garlic, chopped fresh herbs (such as rosemary or thyme), salt, and pepper. Stir until well combined.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Brush the potatoes:</div>
                        <div class="ins-content-p">
                            Place the sliced potatoes on a baking sheet. Brush the herb butter mixture over the potatoes, ensuring the butter gets into the slices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season:</div>
                        <div class="ins-content-p">
                            Sprinkle additional salt and pepper over the potatoes, ensuring the seasoning gets between the slices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake:</div>
                        <div class="ins-content-p">
                            Bake the potatoes in the preheated oven for 40-50 minutes or until they are crispy on the outside and tender on the inside. You can baste them with the herb butter mixture halfway through the baking time.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional cheese topping:</div>
                        <div class="ins-content-p">
                            If desired, add grated cheese (such as Parmesan or cheddar) during the last 10 minutes of baking for a cheesy crust.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Once baked to perfection, serve the Hasselback Potatoes hot. Garnish with additional herbs if desired. Enjoy this visually stunning and delicious side dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    // -------------------------------------------------------Dal------------------------------------------------------- 

    'Tadka Dal (Yellow Dal)':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Yellow lentils (Toor Dal)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Turmeric powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Green chilies, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Asafoetida (Hing)</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Curry leaves</td>
                    <td>1 sprig</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Oil or ghee</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Wash and boil the lentils:</div>
                        <div class="ins-content-p">
                            Wash 1 cup of yellow lentils (dal) thoroughly. In a large pot, add the lentils and 4 cups of water. Bring to a boil, then reduce the heat to simmer. Cook until the lentils are soft and fully cooked.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of ghee or oil. Add 1 teaspoon of cumin seeds and let them splutter. Add 1 finely chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 1 chopped tomato and cook until it becomes soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, and 1/2 teaspoon of red chili powder. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with lentils:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked lentils. Mix everything well and bring it to a gentle simmer. Add salt to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tadka (tempering):</div>
                        <div class="ins-content-p">
                            In a small pan, heat 1 tablespoon of ghee. Add 1 teaspoon of mustard seeds, 1 teaspoon of cumin seeds, 2-3 dried red chilies, and a pinch of asafoetida. Let the mustard seeds splutter and pour this tadka over the dal.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Tadka Dal with fresh coriander leaves. Serve hot with rice or Indian bread (roti). Enjoy the delicious and comforting Tadka Dal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Dal Makhani':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Whole black gram (Sabut Urad Dal)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rajma (Kidney beans)</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Butter</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Cumin seeds</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Onion, finely chopped</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Tomatoes, pureed</td>
                    <td>3 medium</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Ginger-garlic paste</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Red chili powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Coriander powder</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Garam masala</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Fresh cream</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Kasuri methi (Dried fenugreek leaves)</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Soak and cook lentils:</div>
                        <div class="ins-content-p">
                            Soak 1 cup of black lentils (whole urad dal) and 1/4 cup of kidney beans (rajma) in water overnight. Rinse and drain. In a large pot, combine the lentils and kidney beans with 4 cups of water. Bring to a boil, then reduce heat and simmer until they are fully cooked and soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of ghee. Add 1 teaspoon of cumin seeds and let them splutter. Add 1 finely chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 1 cup of tomato puree and cook until the oil starts to separate from the mixture.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder, and salt to taste. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with lentils:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked lentils and kidney beans. Mix well and simmer for an additional 30 minutes to allow the flavors to meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add cream and butter:</div>
                        <div class="ins-content-p">
                            Stir in 1/2 cup of cream and 2 tablespoons of butter. Simmer for another 10-15 minutes until the dal makhani reaches a creamy consistency.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Dal Makhani with fresh coriander leaves and a drizzle of cream. Serve hot with naan or rice. Enjoy the rich and flavorful Dal Makhani!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chana Dal':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Whole black gram (Sabut Urad Dal)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rajma (Kidney beans)</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Butter</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Cumin seeds</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Onion, finely chopped</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Tomatoes, pureed</td>
                    <td>3 medium</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Ginger-garlic paste</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Red chili powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Coriander powder</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Garam masala</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Fresh cream</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Kasuri methi (Dried fenugreek leaves)</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Wash and soak chana dal:</div>
                        <div class="ins-content-p">
                            Wash 1 cup of chana dal (split chickpeas) thoroughly. Soak the chana dal in water for at least 2 hours or preferably overnight. Drain the soaked dal before cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook chana dal:</div>
                        <div class="ins-content-p">
                            In a large pot, combine the soaked chana dal with 3 cups of water. Bring to a boil, then reduce heat to simmer. Cook until the dal is tender but not mushy. This may take approximately 20-25 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of oil or ghee. Add 1 teaspoon of cumin seeds and let them splutter. Add 1 chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 1 chopped tomato and cook until it becomes soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder, and salt to taste. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with chana dal:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked chana dal. Mix well and simmer for an additional 10-15 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Garnish with fresh coriander leaves before serving. You can also add a squeeze of lemon juice for extra freshness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the Chana Dal hot with rice or Indian bread (roti). Enjoy the nutritious and flavorful dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Masoor Dal':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Red lentils (Masoor Dal)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Onion, finely chopped</td>
                    <td>1 medium</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Green chilies, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Turmeric powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Red chili powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Coriander powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    td>Asafoetida (Hing)</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Oil or ghee</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Wash and soak masoor dal:</div>
                        <div class="ins-content-p">
                            Wash 1 cup of masoor dal (red lentils) thoroughly. Soak the masoor dal in water for about 30 minutes. Drain the soaked dal before cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook masoor dal:</div>
                        <div class="ins-content-p">
                            In a saucepan, combine the soaked masoor dal with 3 cups of water. Bring to a boil, then reduce heat to simmer. Cook until the dal is soft and fully cooked, which usually takes about 15-20 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of oil or ghee. Add 1 teaspoon of cumin seeds and let them splutter. Add 1 chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 1 chopped tomato and cook until it becomes soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder, and salt to taste. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with masoor dal:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked masoor dal. Mix well and simmer for an additional 10-15 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Garnish with fresh coriander leaves before serving. You can also squeeze some lemon juice for added freshness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the Masoor Dal hot with rice or Indian bread (roti). Enjoy this delicious and nutritious red lentil curry!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Toor Dal (Arhar Dal)':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Toor Dal (Arhar Dal)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Turmeric powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Green chilies, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Asafoetida (Hing)</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Curry leaves</td>
                    <td>1 sprig</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Oil or ghee</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Wash and soak toor dal:</div>
                        <div class="ins-content-p">
                            Wash 1 cup of toor dal (pigeon peas) thoroughly. Soak the toor dal in water for about 30 minutes. Drain the soaked dal before cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook toor dal:</div>
                        <div class="ins-content-p">
                            In a saucepan, combine the soaked toor dal with 3 cups of water. Bring to a boil, then reduce heat to simmer. Cook until the dal is soft and fully cooked, which usually takes about 20-25 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of oil or ghee. Add 1 teaspoon of mustard seeds and 1 teaspoon of cumin seeds. Let them splutter. Add 1 chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 1 chopped tomato and cook until it becomes soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder, and salt to taste. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with toor dal:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked toor dal. Mix well and simmer for an additional 10-15 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Garnish with fresh coriander leaves before serving. You can also squeeze some lemon juice for added freshness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the Toor Dal hot with rice or Indian bread (roti). Enjoy this classic and nutritious dal preparation!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Urad Dal (Black Dal)':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Urad Dal (Black Dal)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Onion, finely chopped</td>
                    <td>1 medium</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Green chilies, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Asafoetida (Hing)</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Curry leaves</td>
                    <td>1 sprig</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Oil or ghee</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Wash and soak urad dal:</div>
                        <div class="ins-content-p">
                            Wash 1 cup of urad dal (black gram) thoroughly. Soak the urad dal in water for about 4-6 hours, or overnight. Drain the soaked dal before cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook urad dal:</div>
                        <div class="ins-content-p">
                            In a saucepan, combine the soaked urad dal with 3 cups of water. Bring to a boil, then reduce heat to simmer. Cook until the dal is soft and fully cooked, which usually takes about 30-40 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of oil or ghee. Add 1 teaspoon of mustard seeds and 1 teaspoon of cumin seeds. Let them splutter. Add 1 chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 1 chopped tomato and cook until it becomes soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder, and salt to taste. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with urad dal:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked urad dal. Mix well and simmer for an additional 10-15 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Garnish with fresh coriander leaves before serving. You can also squeeze some lemon juice for added freshness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the Urad Dal hot with rice or Indian bread (roti). Enjoy this creamy and flavorful dal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Moong Dal':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Moong Dal (Split Yellow Lentils)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Onion, finely chopped</td>
                    <td>1 medium</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Green chilies, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Asafoetida (Hing)</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Curry leaves</td>
                    <td>1 sprig</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Oil or ghee</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Wash and soak moong dal:</div>
                        <div class="ins-content-p">
                            Wash 1 cup of moong dal (yellow lentils) thoroughly. Soak the moong dal in water for about 30 minutes. Drain the soaked dal before cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook moong dal:</div>
                        <div class="ins-content-p">
                            In a saucepan, combine the soaked moong dal with 3 cups of water. Bring to a boil, then reduce heat to simmer. Cook until the dal is soft and fully cooked, which usually takes about 15-20 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of oil or ghee. Add 1 teaspoon of cumin seeds and let them splutter. Add 1 chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 1 chopped tomato and cook until it becomes soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder, and salt to taste. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with moong dal:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked moong dal. Mix well and simmer for an additional 10-15 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Garnish with fresh coriander leaves before serving. You can also squeeze some lemon juice for added freshness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the Moong Dal hot with rice or Indian bread (roti). Enjoy this light and nutritious lentil curry!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Dal Tadka':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Yellow lentils (Toor Dal)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Water</td>
                    <td>3 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Turmeric powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Green chilies, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Asafoetida (Hing)</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Curry leaves</td>
                    <td>1 sprig</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Oil or ghee</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Red chili powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Cumin powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Coriander powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Garam masala</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Wash and soak the dal:</div>
                        <div class="ins-content-p">
                            Wash 1 cup of mixed dal (combination of toor dal, masoor dal, and moong dal) thoroughly. Soak the dal in water for about 30 minutes. Drain the soaked dal before cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the dal:</div>
                        <div class="ins-content-p">
                            In a large pot, combine the soaked dal with 4 cups of water. Add 1/2 teaspoon of turmeric powder and bring to a boil. Reduce the heat to simmer and cook until the dal is soft and fully cooked, which usually takes about 20-25 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tempering (tadka):</div>
                        <div class="ins-content-p">
                            In a separate pan, heat 2 tablespoons of ghee or oil. Add 1 teaspoon of mustard seeds, 1 teaspoon of cumin seeds, and let them splutter. Add 1 chopped onion and sauté until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Add 1 tablespoon of minced garlic, 1 tablespoon of minced ginger, and sauté for a minute. Then, add 2 chopped tomatoes and cook until they become soft.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spice powders:</div>
                        <div class="ins-content-p">
                            Add 1 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, 1/2 teaspoon of red chili powder, and salt to taste. Mix well and sauté for a couple of minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with cooked dal:</div>
                        <div class="ins-content-p">
                            Add the prepared tempering to the cooked dal. Mix well and simmer for an additional 10-15 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare tadka (tempering):</div>
                        <div class="ins-content-p">
                            In a small pan, heat 1 tablespoon of ghee. Add 1 teaspoon of mustard seeds, 1 teaspoon of cumin seeds, 2-3 dried red chilies, and a pinch of asafoetida. Let the mustard seeds splutter and pour this tadka over the dal.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Dal Tadka with fresh coriander leaves. Serve hot with rice or Indian bread (roti). Enjoy this flavorful and comforting dal dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    // -----------------------------------------------------Vegitables-----------------------------------------------------


    'Roasted Vegetable Medley':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Carrots, peeled and sliced</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Zucchini, sliced</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Broccoli florets</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Red bell pepper, sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Yellow bell pepper, sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Cherry tomatoes</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Red onion, sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Olive oil</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Garlic powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Dried oregano</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Dried thyme</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Paprika</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Fresh parsley, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 400°F (200°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the vegetables:</div>
                        <div class="ins-content-p">
                            Wash and chop a variety of vegetables such as bell peppers, zucchini, cherry tomatoes, red onions, and carrots. Cut them into bite-sized pieces.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the vegetables:</div>
                        <div class="ins-content-p">
                            In a large bowl, toss the chopped vegetables with 2 tablespoons of olive oil, salt, black pepper, and your favorite dried herbs or seasoning (such as thyme, rosemary, or Italian seasoning).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Spread on a baking sheet:</div>
                        <div class="ins-content-p">
                            Spread the seasoned vegetables evenly on a baking sheet lined with parchment paper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roast in the oven:</div>
                        <div class="ins-content-p">
                            Roast the vegetables in the preheated oven for about 25-30 minutes or until they are golden brown and tender, stirring once halfway through the cooking time for even roasting.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Remove the roasted vegetable medley from the oven. Garnish with fresh herbs, if desired. Serve hot as a delicious side dish or as a standalone meal.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy the Roasted Vegetable Medley with your favorite dipping sauce or as a wholesome and flavorful addition to your meals!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Vegetarian Stir-Fry':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tofu, cubed</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Broccoli florets</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Carrots, sliced</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Bell peppers (assorted colors), sliced</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Snap peas</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Mushrooms, sliced</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Zucchini, sliced</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Soy sauce</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Sesame oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Cornstarch</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Vegetable broth</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Red pepper flakes</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Sesame seeds</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Green onions, sliced</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the vegetables:</div>
                        <div class="ins-content-p">
                            Wash and chop a variety of vegetables such as bell peppers, broccoli, carrots, snap peas, mushrooms, and any other vegetables of your choice. Cut them into uniform, bite-sized pieces.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the tofu or protein (optional):</div>
                        <div class="ins-content-p">
                            If using tofu, press and cube it. Alternatively, you can use pre-cooked tofu or other vegetarian protein sources like tempeh or seitan. Season the tofu with soy sauce or your preferred marinade.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Heat the wok or pan:</div>
                        <div class="ins-content-p">
                            Heat a wok or a large pan over medium-high heat. Add 2 tablespoons of vegetable oil.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Stir-fry the vegetables:</div>
                        <div class="ins-content-p">
                            Add the chopped vegetables to the hot wok or pan. Stir-fry them for 3-5 minutes or until they are slightly tender but still crisp.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add tofu or protein (if using):</div>
                        <div class="ins-content-p">
                            If using tofu or other protein, add it to the wok with the vegetables. Continue to stir-fry until the tofu is golden brown and the vegetables are cooked to your liking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the sauce:</div>
                        <div class="ins-content-p">
                            In a small bowl, whisk together a stir-fry sauce using ingredients like soy sauce, sesame oil, ginger, garlic, and a touch of sweetener. Pour the sauce over the stir-fried vegetables and tofu.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Toss and coat:</div>
                        <div class="ins-content-p">
                            Toss the vegetables, tofu, and sauce together until everything is evenly coated. Cook for an additional 1-2 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Vegetarian Stir-Fry with chopped green onions, sesame seeds, or fresh cilantro. Serve hot over rice or noodles.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy the delicious and nutritious Vegetarian Stir-Fry as a wholesome meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>
    
    `,

    'Ratatouille':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Eggplant, diced</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Zucchini, sliced</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Yellow squash, sliced</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Red bell pepper, diced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Yellow bell pepper, diced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Tomatoes, diced</td>
                    <td>4 medium</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Onion, thinly sliced</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Fresh basil, chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Fresh thyme, chopped</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Olive oil</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Balsamic vinegar</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the vegetables:</div>
                        <div class="ins-content-p">
                            Wash and slice 1 medium eggplant, 1 medium zucchini, 1 medium yellow squash, and 2 bell peppers (preferably red and yellow) into thin rounds or slices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Arrange in layers:</div>
                        <div class="ins-content-p">
                            In a circular or overlapping pattern, arrange the sliced vegetables in layers in a baking dish or on a baking sheet. You can also alternate the vegetables for a visually appealing presentation.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the tomato sauce:</div>
                        <div class="ins-content-p">
                            In a bowl, mix 2 cups of tomato sauce with minced garlic, dried herbs (such as thyme, rosemary, and oregano), salt, and black pepper. Pour this tomato sauce mixture over the arranged vegetables.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drizzle with olive oil:</div>
                        <div class="ins-content-p">
                            Drizzle the vegetable and tomato sauce layers with 2 tablespoons of olive oil.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Cover the baking dish with aluminum foil and bake in the preheated oven for about 45 minutes. After 45 minutes, remove the foil and bake for an additional 15-20 minutes or until the vegetables are tender and slightly caramelized.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Ratatouille with fresh basil or parsley. Serve hot as a delicious side dish or a standalone vegetarian meal.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy the classic French Ratatouille with crusty bread or as a complement to your favorite protein!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Grilled Portobello Mushrooms':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Portobello mushrooms</td>
                    <td>4 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Balsamic vinegar</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Olive oil</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Fresh thyme, chopped</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Red pepper flakes (optional)</td>
                    <td>To taste</td>
                </tr> 
                <tr>
                    <td>9</td>
                    <td>Parsley, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Clean the mushrooms:</div>
                        <div class="ins-content-p">
                            Clean 4-6 large portobello mushrooms by wiping them with a damp cloth or paper towel. Remove the stems if they are still attached.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the marinade:</div>
                        <div class="ins-content-p">
                            In a bowl, whisk together 3 tablespoons of balsamic vinegar, 2 tablespoons of olive oil, 2 minced garlic cloves, 1 teaspoon of dried thyme, salt, and black pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Marinate the mushrooms:</div>
                        <div class="ins-content-p">
                            Place the cleaned mushrooms in a shallow dish and pour the marinade over them. Make sure each mushroom is coated with the marinade. Let them marinate for at least 15-30 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the grill:</div>
                        <div class="ins-content-p">
                            Preheat your grill to medium-high heat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Grill the mushrooms:</div>
                        <div class="ins-content-p">
                            Place the marinated mushrooms on the preheated grill. Grill each side for about 5-7 minutes or until they are tender and have grill marks.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Baste with marinade:</div>
                        <div class="ins-content-p">
                            Occasionally baste the mushrooms with the remaining marinade during grilling to enhance the flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the grilled portobello mushrooms with fresh parsley or chopped chives. Serve hot as a side dish or as a delicious topping for burgers or salads.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy these flavorful Grilled Portobello Mushrooms as a tasty and satisfying dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Zucchini Noodles With Pesto':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Zucchini, spiralized into noodles</td>
                    <td>4 medium</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Cherry tomatoes, halved</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pesto sauce</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Parmesan cheese, grated</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Pine nuts, toasted</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Fresh basil leaves, torn</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the zucchini noodles:</div>
                        <div class="ins-content-p">
                            Using a spiralizer or a vegetable peeler, create zucchini noodles from 4-6 medium-sized zucchini. If using a peeler, run it along the zucchini lengthwise to create thin, ribbon-like noodles.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Blanch the zucchini noodles:</div>
                        <div class="ins-content-p">
                            Bring a pot of water to a boil. Add a pinch of salt and blanch the zucchini noodles for 1-2 minutes. This will soften them slightly while maintaining a crunchy texture. Drain and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the pesto sauce:</div>
                        <div class="ins-content-p">
                            In a blender or food processor, combine 2 cups of fresh basil leaves, 1/2 cup of grated Parmesan cheese, 1/3 cup of pine nuts, 2 garlic cloves, and 1/2 cup of extra-virgin olive oil. Blend until smooth. Season with salt and black pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Toss the noodles with pesto:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, toss the blanched zucchini noodles with the prepared pesto sauce until the noodles are evenly coated.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Add cherry tomatoes, sliced olives, or roasted pine nuts for extra flavor and texture.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Chill or serve immediately:</div>
                        <div class="ins-content-p">
                            You can chill the Zucchini Noodles with Pesto in the refrigerator for a refreshing cold dish, or serve them immediately for a warm option.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish with additional Parmesan cheese and fresh basil leaves. Serve the zucchini noodles as a light and healthy meal or a side dish.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this delicious and low-carb Zucchini Noodles with Pesto as a nutritious alternative to traditional pasta dishes!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Stuffed Bell Peppers':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Bell peppers (any color)</td>
                    <td>4 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Quinoa, cooked</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Black beans, canned and drained</td>
                    <td>1 can (15 oz)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Corn kernels</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tomatoes, diced</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Red onion, finely chopped</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Chili powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cumin</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Paprika</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Shredded cheese (cheddar or Mexican blend)</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Fresh cilantro, chopped</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the bell peppers:</div>
                        <div class="ins-content-p">
                            Cut 4-6 bell peppers in half lengthwise, and remove the seeds and membranes. If needed, trim the bottoms of the peppers to make them stable in the baking dish.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the rice:</div>
                        <div class="ins-content-p">
                            In a saucepan, cook 1 cup of rice according to package instructions. Set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the filling:</div>
                        <div class="ins-content-p">
                            In a large mixing bowl, combine the cooked rice, 1 pound of ground meat (such as beef, turkey, or chicken), 1 diced onion, 2 minced garlic cloves, 1 can of diced tomatoes (drained), 1 cup of black beans (drained and rinsed), 1 cup of corn kernels, 1 teaspoon of ground cumin, 1 teaspoon of chili powder, salt, and black pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fill the peppers:</div>
                        <div class="ins-content-p">
                            Stuff each bell pepper half with the filling mixture, pressing it down slightly. Place the stuffed peppers in a baking dish.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Top with cheese:</div>
                        <div class="ins-content-p">
                            Sprinkle shredded cheese (cheddar, mozzarella, or your choice) over the top of each stuffed pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Bake the stuffed bell peppers in the preheated oven for about 25-30 minutes or until the peppers are tender and the cheese is melted and bubbly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the stuffed bell peppers with chopped fresh cilantro or parsley. Serve hot and enjoy!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy these flavorful Stuffed Bell Peppers as a wholesome and satisfying meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Eggplant Parmesan':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Eggplant, sliced into rounds</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>All-purpose flour</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Eggs</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Breadcrumbs (Italian-style)</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Grated Parmesan cheese</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Marinara sauce</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Shredded mozzarella cheese</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Fresh basil, chopped</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Olive oil</td>
                    <td>For frying</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the eggplant:</div>
                        <div class="ins-content-p">
                            Slice 2 large eggplants into 1/2-inch thick rounds. If desired, you can peel the eggplants first. Lay the slices on a paper towel and sprinkle with salt to release excess moisture. Let them sit for about 30 minutes, then pat them dry.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Coat with breadcrumbs:</div>
                        <div class="ins-content-p">
                            In a shallow dish, mix 1 cup of breadcrumbs with 1/2 cup of grated Parmesan cheese, 1 teaspoon of dried oregano, and 1 teaspoon of garlic powder. Dip each eggplant slice into beaten eggs, then coat with the breadcrumb mixture, pressing the breadcrumbs onto each slice.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake the eggplant:</div>
                        <div class="ins-content-p">
                            Place the coated eggplant slices on a baking sheet lined with parchment paper. Bake in the preheated oven for about 20-25 minutes or until the eggplant is golden brown and crispy. Flip the slices halfway through the baking time.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Layer with marinara and cheese:</div>
                        <div class="ins-content-p">
                            In a baking dish, spread a layer of marinara sauce. Place a layer of baked eggplant slices on top. Add a generous layer of shredded mozzarella cheese and a sprinkle of grated Parmesan. Repeat the layers until all the eggplant is used, finishing with a layer of cheese on top.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake until bubbly:</div>
                        <div class="ins-content-p">
                            Bake the Eggplant Parmesan in the oven for an additional 25-30 minutes or until the cheese is melted and bubbly, and the edges are golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish with fresh basil or parsley. Let it cool for a few minutes before serving.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this delicious Eggplant Parmesan as a comforting and flavorful dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Spinach And Feta Stuffed Mushrooms':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Large mushrooms, cleaned and stems removed</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Fresh spinach, chopped</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Feta cheese, crumbled</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Onion, finely chopped</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Crushed red pepper flakes</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Fresh parsley, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the mushrooms:</div>
                        <div class="ins-content-p">
                            Clean and remove the stems from 20-24 medium-sized mushrooms. Place the mushroom caps on a baking sheet lined with parchment paper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the filling:</div>
                        <div class="ins-content-p">
                            In a pan, sauté 2 cups of fresh spinach until wilted. Remove excess moisture by pressing the spinach with a paper towel. In a bowl, mix the sautéed spinach with 1 cup of crumbled feta cheese, 1/2 cup of grated Parmesan cheese, 1/2 cup of breadcrumbs, 2 minced garlic cloves, salt, and black pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fill the mushroom caps:</div>
                        <div class="ins-content-p">
                            Spoon the spinach and feta filling into each mushroom cap, pressing down gently to compact the filling.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Bake the stuffed mushrooms in the preheated oven for about 15-20 minutes or until the mushrooms are tender and the filling is golden brown on top.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Spinach and Feta Stuffed Mushrooms with fresh chopped parsley or dill. Serve them warm.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy these delicious Spinach and Feta Stuffed Mushrooms as a flavorful appetizer or side dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Veggie Curry':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mixed vegetables (carrots, potatoes, peas, bell peppers, etc.)</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Onion, finely chopped</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ginger, minced</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Green chili, chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Curry leaves</td>
                    <td>1 sprig</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Turmeric powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Coriander powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Red chili powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Garam masala</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Coconut milk</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Heat oil and sauté aromatics:</div>
                        <div class="ins-content-p">
                            In a large pot or deep skillet, heat 2 tablespoons of vegetable oil over medium heat. Add 1 diced onion, 2 minced garlic cloves, and 1 tablespoon of grated ginger. Sauté until the onions are soft and translucent.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add curry spices:</div>
                        <div class="ins-content-p">
                            Stir in 2 tablespoons of curry powder, 1 teaspoon of ground turmeric, 1 teaspoon of ground cumin, and 1/2 teaspoon of cayenne pepper (adjust for spice preference). Cook the spices for 1-2 minutes until fragrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add vegetables:</div>
                        <div class="ins-content-p">
                            Add a mix of your favorite vegetables, such as 2 cups of cauliflower florets, 1 cup of diced carrots, 1 cup of chopped bell peppers, and 1 cup of green beans. Sauté for 5-7 minutes until the vegetables start to soften.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Pour in coconut milk:</div>
                        <div class="ins-content-p">
                            Pour in 1 can (400ml) of coconut milk and 1 cup of vegetable broth. Stir well to combine.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Simmer and season:</div>
                        <div class="ins-content-p">
                            Bring the curry to a simmer and let it cook for 15-20 minutes, or until the vegetables are tender. Season with salt and pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add tofu or protein (optional):</div>
                        <div class="ins-content-p">
                            If desired, add 1 cup of cubed tofu or your preferred protein (chickpeas, lentils, etc.) to the curry and let it cook for an additional 5-7 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Finish with fresh herbs:</div>
                        <div class="ins-content-p">
                            Stir in a handful of fresh cilantro or parsley just before serving. Adjust the seasoning if needed.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve with rice:</div>
                        <div class="ins-content-p">
                            Serve the Veggie Curry over cooked rice or your favorite grain. Garnish with additional fresh herbs if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this flavorful and comforting Veggie Curry as a delicious vegetarian meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Caprese Salad':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tomatoes, ripe</td>
                    <td>4 medium</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Fresh mozzarella cheese</td>
                    <td>200g</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Fresh basil leaves</td>
                    <td>A handful</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Extra virgin olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Balsamic glaze</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Slice tomatoes and mozzarella:</div>
                        <div class="ins-content-p">
                            Slice 4-6 ripe tomatoes and 1 pound of fresh mozzarella cheese into 1/4-inch thick slices. Arrange them alternately on a serving platter.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Layer with basil:</div>
                        <div class="ins-content-p">
                            Tuck fresh basil leaves between the tomato and mozzarella slices. Use as many basil leaves as desired for a flavorful and aromatic addition.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drizzle with balsamic glaze:</div>
                        <div class="ins-content-p">
                            Drizzle the Caprese Salad with balsamic glaze. You can make a simple balsamic glaze by reducing balsamic vinegar in a saucepan until it thickens.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season with salt and pepper:</div>
                        <div class="ins-content-p">
                            Sprinkle the tomato and mozzarella slices with sea salt and black pepper to taste. Adjust the seasoning according to your preference.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drizzle with olive oil:</div>
                        <div class="ins-content-p">
                            Finish the Caprese Salad by drizzling extra-virgin olive oil over the tomatoes, mozzarella, and basil. Use a good-quality olive oil for the best flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional garnish:</div>
                        <div class="ins-content-p">
                            Optionally, garnish the salad with a sprinkle of dried oregano or a handful of pine nuts for added texture.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the Caprese Salad immediately as a refreshing appetizer or side dish. It's best enjoyed fresh!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this classic Caprese Salad with the perfect combination of fresh tomatoes, creamy mozzarella, and aromatic basil!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    // -------------------------------------------------Non-Veg Items-------------------------------------------------------


    // ---------------------------------------------------Egg------------------------------------------------------------ 
    'Omelette':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Eggs</td>
                    <td>2-3</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Milk</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Butter or cooking oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Fillings (e.g., diced vegetables, cheese, ham)</td>
                    <td>As desired</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Fresh herbs (optional)</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare ingredients:</div>
                        <div class="ins-content-p">
                            Gather 3 large eggs, salt, pepper, 1 tablespoon of butter, and any desired fillings such as diced vegetables, cheese, or herbs.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Whisk the eggs:</div>
                        <div class="ins-content-p">
                            Crack the eggs into a bowl. Whisk the eggs with a fork or whisk until the yolks and whites are well combined. Season with a pinch of salt and pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the pan:</div>
                        <div class="ins-content-p">
                            Place a non-stick skillet over medium heat. Add 1 tablespoon of butter and let it melt, coating the bottom of the pan evenly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Pour and cook the eggs:</div>
                        <div class="ins-content-p">
                            Pour the whisked eggs into the preheated skillet. Allow the eggs to set slightly at the edges, and then use a spatula to gently lift the edges, letting the uncooked eggs flow underneath.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add fillings:</div>
                        <div class="ins-content-p">
                            Once the omelette is mostly set but still slightly runny on top, add your desired fillings evenly over one half of the omelette.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fold and serve:</div>
                        <div class="ins-content-p">
                            Carefully fold the other half of the omelette over the fillings, creating a half-moon shape. Cook for an additional 1-2 minutes until the omelette is cooked through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slide onto a plate:</div>
                        <div class="ins-content-p">
                            Slide the omelette onto a plate, folding it in half if necessary. The omelette should be golden brown on the outside and fluffy on the inside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish with fresh herbs or additional cheese if desired. Serve the omelette hot and enjoy!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this simple and delicious Omelette for breakfast, brunch, or any time of the day!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Egg Salad Sandwich':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Hard-boiled eggs</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mayonnaise</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Dijon mustard</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Green onions, finely chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Celery, finely chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Bread slices</td>
                    <td>As needed</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Lettuce leaves</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Tomato slices</td>
                    <td>For serving</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Boil the eggs:</div>
                        <div class="ins-content-p">
                            Place 4-6 eggs in a saucepan and cover them with cold water. Bring the water to a boil, then reduce the heat and simmer for 10 minutes. Transfer the boiled eggs to an ice bath to cool before peeling.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Peel and chop the eggs:</div>
                        <div class="ins-content-p">
                            Peel the cooled boiled eggs and chop them into small pieces using a knife or an egg slicer.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the egg salad:</div>
                        <div class="ins-content-p">
                            In a mixing bowl, combine the chopped eggs with 1/4 cup of mayonnaise, 1 tablespoon of Dijon mustard, 1 tablespoon of finely chopped celery, 1 tablespoon of finely chopped red onion, salt, and black pepper to taste. Mix well to combine.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add optional ingredients:</div>
                        <div class="ins-content-p">
                            Customize your egg salad by adding ingredients like chopped fresh dill, chives, or relish for extra flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Assemble the sandwich:</div>
                        <div class="ins-content-p">
                            Spread a generous portion of the egg salad onto slices of your favorite bread. Optionally, you can add lettuce leaves or additional toppings.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cut and serve:</div>
                        <div class="ins-content-p">
                            Place another slice of bread on top to create a sandwich. Cut the sandwich in half or quarters for serving.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and enjoy:</div>
                        <div class="ins-content-p">
                            Garnish the Egg Salad Sandwich with additional chopped herbs or a sprinkle of paprika. Enjoy your delicious and satisfying sandwich!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this classic Egg Salad Sandwich for a quick and tasty meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Deviled Eggs':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Hard-boiled eggs</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mayonnaise</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Dijon mustard</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Relish (sweet or dill)</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Paprika</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Chopped fresh chives or parsley</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Boil the eggs:</div>
                        <div class="ins-content-p">
                            Place 6-8 eggs in a saucepan and cover them with cold water. Bring the water to a boil, then reduce the heat and simmer for 10 minutes. Transfer the boiled eggs to an ice bath to cool before peeling.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Peel and halve the eggs:</div>
                        <div class="ins-content-p">
                            Peel the cooled boiled eggs and cut them in half lengthwise. Carefully remove the yolks and place them in a bowl.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the filling:</div>
                        <div class="ins-content-p">
                            Mash the egg yolks with a fork. Add 1/4 cup of mayonnaise, 1 teaspoon of Dijon mustard, 1 teaspoon of white vinegar, salt, and black pepper to taste. Mix until smooth and well combined.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional ingredients:</div>
                        <div class="ins-content-p">
                            Customize your deviled egg filling by adding ingredients like finely chopped pickles, chives, or a dash of hot sauce for extra flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fill the egg whites:</div>
                        <div class="ins-content-p">
                            Spoon or pipe the deviled egg filling into the egg white halves. You can use a piping bag or a simple plastic sandwich bag with the corner snipped off for a neater presentation.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish:</div>
                        <div class="ins-content-p">
                            Garnish each deviled egg with a sprinkle of paprika, chopped chives, or a small parsley leaf for a decorative touch.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Chill and serve:</div>
                        <div class="ins-content-p">
                            Chill the deviled eggs in the refrigerator for at least 30 minutes before serving. This allows the flavors to meld and the filling to set.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve and enjoy:</div>
                        <div class="ins-content-p">
                            Arrange the Deviled Eggs on a serving platter and enjoy this classic appetizer at your next gathering!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy these delicious and creamy Deviled Eggs as a delightful appetizer or party snack!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Shakshuka':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Onion, finely chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Red bell pepper, chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Canned crushed tomatoes</td>
                    <td>1 can (28 oz)</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Ground cumin</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Smoked paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Cayenne pepper (optional)</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Eggs</td>
                    <td>4-6</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Fresh parsley, chopped</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Feta cheese (optional)</td>
                    <td>For topping</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Sauté aromatics:</div>
                        <div class="ins-content-p">
                            In a large skillet, heat 2 tablespoons of olive oil over medium heat. Add 1 diced onion and 1 diced bell pepper. Sauté until the vegetables are soft and the onion is translucent.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add garlic and spices:</div>
                        <div class="ins-content-p">
                            Stir in 3 minced garlic cloves, 1 teaspoon of ground cumin, 1 teaspoon of smoked paprika, 1/2 teaspoon of ground coriander, and a pinch of red pepper flakes (optional). Cook for 1-2 minutes until fragrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add tomatoes:</div>
                        <div class="ins-content-p">
                            Pour in 1 can (28 ounces) of crushed tomatoes or diced tomatoes with their juices. Season with salt and black pepper to taste. Simmer the sauce for about 10-15 minutes, allowing it to thicken.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Create wells for eggs:</div>
                        <div class="ins-content-p">
                            Make small wells in the tomato sauce using a spoon. Crack 4-6 eggs into the wells, spacing them evenly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Simmer eggs:</div>
                        <div class="ins-content-p">
                            Cover the skillet and simmer the eggs in the tomato sauce for 8-10 minutes, or until the egg whites are set but the yolks are still runny. Adjust the cooking time if you prefer firmer yolks.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season and garnish:</div>
                        <div class="ins-content-p">
                            Season the Shakshuka with salt and black pepper. Garnish with chopped fresh parsley or cilantro.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the Shakshuka directly from the skillet. Scoop the tomato sauce and eggs onto plates or shallow bowls.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this flavorful and comforting Shakshuka with crusty bread or pita for dipping!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Egg Curry':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Hard-boiled eggs</td>
                    <td>4-6</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Onion, finely chopped</td>
                    <td>1 large</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tomatoes, chopped</td>
                    <td>2 medium</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ginger-garlic paste</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Green chili, chopped</td>
                    <td>1-2</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Curry leaves</td>
                    <td>1 sprig</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Mustard seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Cumin seeds</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Turmeric powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Coriander powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Red chili powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Garam masala</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Coconut milk</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Fresh coriander leaves, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Boil the eggs:</div>
                        <div class="ins-content-p">
                            Place 6-8 eggs in a saucepan and cover them with cold water. Bring the water to a boil, then reduce the heat and simmer for 10 minutes. Transfer the boiled eggs to an ice bath to cool before peeling.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Peel and halve the eggs:</div>
                        <div class="ins-content-p">
                            Peel the cooled boiled eggs and cut them in half lengthwise. Set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sauté aromatics:</div>
                        <div class="ins-content-p">
                            In a large pan or skillet, heat 2 tablespoons of oil over medium heat. Add 1 diced onion and cook until softened.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add spices:</div>
                        <div class="ins-content-p">
                            Stir in 2 teaspoons of curry powder, 1 teaspoon of ground cumin, 1 teaspoon of ground coriander, 1/2 teaspoon of turmeric, and a pinch of red pepper flakes (optional). Cook for 1-2 minutes until fragrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add tomato puree:</div>
                        <div class="ins-content-p">
                            Pour in 1 cup of tomato puree or crushed tomatoes. Cook the mixture for 5-7 minutes, allowing it to thicken.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add coconut milk:</div>
                        <div class="ins-content-p">
                            Stir in 1 cup of coconut milk, bringing the curry to a gentle simmer. Season with salt and black pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add eggs:</div>
                        <div class="ins-content-p">
                            Gently place the halved boiled eggs into the curry, spooning some of the sauce over them. Simmer for an additional 5-7 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Egg Curry with fresh cilantro or parsley. Serve the curry over rice or with your favorite bread.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this delicious Egg Curry as a comforting and flavorful meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Egg Fried Rice':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Cooked rice (preferably cold)</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Eggs</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Carrots, finely diced</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Peas</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Green onions, chopped</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Soy sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Sesame oil</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Sesame seeds for garnish</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Cook rice:</div>
                        <div class="ins-content-p">
                            Cook 2 cups of white or brown rice according to package instructions. For best results, use rice that has been cooked and cooled beforehand or leftover rice.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare ingredients:</div>
                        <div class="ins-content-p">
                            Dice 1 cup of mixed vegetables (carrots, peas, corn, and green beans work well). Finely chop 1/2 cup of onion and 2 cloves of garlic. Beat 2 eggs in a bowl.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sauté vegetables:</div>
                        <div class="ins-content-p">
                            In a large pan or wok, heat 2 tablespoons of oil over medium-high heat. Add the chopped onion and sauté until it becomes translucent. Add the mixed vegetables and cook until they are tender-crisp.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Push vegetables aside:</div>
                        <div class="ins-content-p">
                            Push the sautéed vegetables to one side of the pan, creating an empty space. Pour the beaten eggs into the empty space and scramble them until just cooked.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine with rice:</div>
                        <div class="ins-content-p">
                            Add the cooked rice to the pan, stirring to combine it with the vegetables and eggs. Break up any clumps of rice.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season and stir-fry:</div>
                        <div class="ins-content-p">
                            Drizzle 2 tablespoons of soy sauce over the rice mixture. Season with salt and black pepper to taste. Stir-fry the ingredients until well combined and heated through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add green onions:</div>
                        <div class="ins-content-p">
                            Stir in 2 chopped green onions, reserving some for garnish. Continue to cook for an additional 1-2 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Egg Fried Rice with the remaining chopped green onions. Serve hot and enjoy this flavorful and quick dish!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this delicious and easy Egg Fried Rice as a tasty meal or side dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Egg Benedict':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>English muffins</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Large eggs</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Canadian bacon or ham</td>
                    <td>4 slices</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Hollandaise sauce</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Butter</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Fresh chives, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare Hollandaise sauce:</div>
                        <div class="ins-content-p">
                            In a heatproof bowl, whisk together 3 large egg yolks and 1 tablespoon of water. Place the bowl over a pot of simmering water (double boiler) and continue whisking until the mixture thickens. Slowly drizzle in 1 cup of melted unsalted butter, whisking continuously until the sauce is smooth. Add 1 tablespoon of lemon juice, 1/2 teaspoon of Dijon mustard, salt, and cayenne pepper to taste. Keep warm while preparing other components.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Poach eggs:</div>
                        <div class="ins-content-p">
                            Bring a large pot of water to a simmer. Add a splash of white vinegar. Carefully crack 4 eggs, one at a time, into the simmering water. Poach the eggs for about 3 minutes for a runny yolk or longer for a firmer yolk. Use a slotted spoon to remove the poached eggs and place them on a plate lined with paper towels to drain excess water.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Toast English muffins:</div>
                        <div class="ins-content-p">
                            Split and toast 4 English muffins until golden brown. Optionally, spread a thin layer of butter on each half.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare Canadian bacon or ham:</div>
                        <div class="ins-content-p">
                            In a skillet over medium heat, cook 8 slices of Canadian bacon or ham until heated through and slightly crispy on the edges.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Assemble Eggs Benedict:</div>
                        <div class="ins-content-p">
                            Place a toasted English muffin half on a plate. Top with a slice of Canadian bacon or ham, followed by a poached egg. Spoon Hollandaise sauce generously over the poached egg.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Eggs Benedict with chopped fresh chives or parsley. Serve immediately and enjoy this classic and indulgent breakfast dish!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this delicious Eggs Benedict for a special breakfast or brunch treat!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Cloud Eggs':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Eggs</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Grated Parmesan cheese</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Fresh chives, chopped</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Butter</td>
                    <td>For greasing</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Optional: Fresh herbs (thyme, rosemary)</td>
                    <td>For extra flavor</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 450°F (230°C). Line a baking sheet with parchment paper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Separate eggs:</div>
                        <div class="ins-content-p">
                            Carefully separate 4 large eggs, placing the egg whites in one bowl and the yolks in individual small bowls or cups.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Whip egg whites:</div>
                        <div class="ins-content-p">
                            Using a hand mixer or stand mixer, whip the egg whites until stiff peaks form. This may take a few minutes, and the egg whites should be glossy and thick.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Create nests on baking sheet:</div>
                        <div class="ins-content-p">
                            Spoon the whipped egg whites onto the prepared baking sheet, forming 4 nests or mounds. Make a well in the center of each nest to hold the egg yolk.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake egg whites:</div>
                        <div class="ins-content-p">
                            Bake the egg whites in the preheated oven for about 3 minutes, or until they start to set and become slightly golden.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add egg yolks:</div>
                        <div class="ins-content-p">
                            Carefully place an egg yolk into the well of each whipped egg white nest.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake until yolks set:</div>
                        <div class="ins-content-p">
                            Return the baking sheet to the oven and bake for an additional 3-4 minutes, or until the egg yolks are set to your liking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season and serve:</div>
                        <div class="ins-content-p">
                            Season the Cloud Eggs with salt, pepper, and any desired herbs or spices. Serve the Cloud Eggs immediately, either on their own or on toast.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy these light and fluffy Cloud Eggs as a unique and visually appealing breakfast!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Egg Drop Soup':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken broth</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Green onions, thinly sliced</td>
                    <td>2-3</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Ginger, finely grated</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Soy sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Sesame oil</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Cornstarch</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Water</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Eggs, beaten</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>White pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Cilantro leaves, for garnish</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare broth:</div>
                        <div class="ins-content-p">
                            In a saucepan, bring 4 cups of chicken or vegetable broth to a simmer over medium heat. Add 1 tablespoon of soy sauce, 1 teaspoon of grated ginger, and 1 clove of minced garlic. Stir to combine.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the broth:</div>
                        <div class="ins-content-p">
                            Taste the broth and adjust the seasoning with salt and white pepper to your liking. You can also add a pinch of sugar for balance.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Create egg mixture:</div>
                        <div class="ins-content-p">
                            In a small bowl, beat 2-3 eggs. You can adjust the number of eggs based on your preference for the egg-to-broth ratio.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Thicken the soup:</div>
                        <div class="ins-content-p">
                            While stirring the simmering broth, slowly pour the beaten eggs into the soup in a steady stream. The eggs will cook instantly and form delicate ribbons. Stir gently to break up the egg strands.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add green onions:</div>
                        <div class="ins-content-p">
                            Add 2-3 chopped green onions to the soup, reserving some for garnish. Stir the soup to distribute the green onions.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Enhance your Egg Drop Soup by adding ingredients like sliced mushrooms, tofu cubes, or baby spinach if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Simmer and serve:</div>
                        <div class="ins-content-p">
                            Let the Egg Drop Soup simmer for an additional 1-2 minutes until heated through. Ladle the soup into bowls, garnish with additional chopped green onions, and serve immediately.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this comforting and easy-to-make Egg Drop Soup as a light and flavorful appetizer or meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Scrambled Egg Burrito':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Eggs</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tortillas (large)</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Black beans, drained and rinsed</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Cheddar cheese, shredded</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tomatoes, diced</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Avocado, sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Sour cream</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Salsa</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Butter or cooking oil</td>
                    <td>1 tablespoon</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Scramble eggs:</div>
                        <div class="ins-content-p">
                            In a bowl, whisk together 4 large eggs. Heat a non-stick skillet over medium heat and add a tablespoon of butter or oil. Pour the whisked eggs into the skillet and cook, stirring gently, until the eggs are scrambled and just set.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season eggs:</div>
                        <div class="ins-content-p">
                            Season the scrambled eggs with salt, black pepper, and any desired herbs or spices. Set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare burrito filling:</div>
                        <div class="ins-content-p">
                            Gather your favorite burrito fillings. This can include cooked and seasoned black beans, shredded cheese, diced tomatoes, sliced avocado, salsa, and chopped cilantro.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Warm tortillas:</div>
                        <div class="ins-content-p">
                            Warm large flour tortillas in a dry skillet or microwave according to package instructions. This makes them more pliable for rolling.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Assemble the burrito:</div>
                        <div class="ins-content-p">
                            Lay a tortilla flat and spoon the scrambled eggs onto the center. Add your chosen burrito fillings on top of the eggs.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fold and roll:</div>
                        <div class="ins-content-p">
                            Fold the sides of the tortilla inwards and then roll it up tightly from the bottom to create a burrito shape.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve and enjoy:</div>
                        <div class="ins-content-p">
                            Place the seam side down and cut the burrito in half if desired. Serve immediately and enjoy this delicious Scrambled Egg Burrito for breakfast or any meal!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Customize:</div>
                        <div class="ins-content-p">
                            Customize your burrito by adding ingredients like sour cream, hot sauce, or your favorite additional toppings.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this satisfying and easy-to-make Scrambled Egg Burrito for a quick and flavorful meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    // -----------------------------------------------------Chicken--------------------------------------------------------- 

    'Chicken Alfredo Pasta':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Fettuccine pasta</td>
                    <td>8 ounces</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Chicken breasts, boneless and skinless</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Butter</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Heavy cream</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Parmesan cheese, grated</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Chopped parsley</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Cook pasta:</div>
                        <div class="ins-content-p">
                            Bring a large pot of salted water to a boil. Cook 8 ounces of fettuccine pasta (or your pasta of choice) according to the package instructions until al dente. Drain and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare chicken:</div>
                        <div class="ins-content-p">
                            Season 1 pound of chicken breast with salt, black pepper, and garlic powder. In a skillet over medium-high heat, heat 2 tablespoons of olive oil. Cook the chicken until browned and cooked through, about 5-7 minutes per side. Once cooked, let it rest for a few minutes before slicing into strips.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make Alfredo sauce:</div>
                        <div class="ins-content-p">
                            In the same skillet, melt 1/2 cup (1 stick) of unsalted butter over medium heat. Add 2 minced garlic cloves and cook for 1-2 minutes until fragrant. Pour in 2 cups of heavy cream and bring to a gentle simmer. Stir in 1 cup of grated Parmesan cheese until melted and smooth. Season with salt and black pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine pasta and chicken:</div>
                        <div class="ins-content-p">
                            Add the cooked pasta and sliced chicken to the Alfredo sauce. Toss until the pasta is coated evenly with the sauce and the chicken is distributed throughout.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Chicken Alfredo Pasta with chopped parsley and additional grated Parmesan cheese. Serve hot and enjoy this creamy and comforting pasta dish!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Enhance your Chicken Alfredo Pasta by adding sautéed mushrooms, spinach, or sun-dried tomatoes if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this indulgent and flavorful Chicken Alfredo Pasta for a satisfying meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chicken Parmesan':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken breasts, boneless and skinless</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>All-purpose flour</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Eggs</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Breadcrumbs</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Parmesan cheese, grated</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Marinara sauce</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Mozzarella cheese, shredded</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Olive oil</td>
                    <td>For frying</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Chopped fresh basil or parsley</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 400°F (200°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare chicken:</div>
                        <div class="ins-content-p">
                            Season 4 boneless, skinless chicken breasts with salt and black pepper. In a shallow dish, whisk 2 large eggs. Dip each chicken breast into the beaten eggs, ensuring they are well coated.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Coat with breadcrumbs:</div>
                        <div class="ins-content-p">
                            In another shallow dish, combine 1 cup of breadcrumbs with 1/2 cup of grated Parmesan cheese, 1 teaspoon of dried oregano, and 1 teaspoon of garlic powder. Coat each chicken breast with the breadcrumb mixture, pressing it onto the chicken to adhere.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Pan-fry chicken:</div>
                        <div class="ins-content-p">
                            In a large oven-safe skillet, heat 2 tablespoons of olive oil over medium-high heat. Add the breaded chicken breasts and cook for 2-3 minutes per side, or until golden brown. Remove the skillet from the heat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add marinara sauce:</div>
                        <div class="ins-content-p">
                            Spoon marinara sauce over each chicken breast. You can use about 1 cup of store-bought or homemade marinara sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Top with mozzarella:</div>
                        <div class="ins-content-p">
                            Sprinkle shredded mozzarella cheese on top of each chicken breast, covering the sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Place the skillet in the preheated oven and bake for 20-25 minutes, or until the chicken is cooked through and the cheese is melted and bubbly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Chicken Parmesan with chopped fresh basil or parsley. Serve the chicken over cooked spaghetti or your favorite pasta.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this classic and delicious Chicken Parmesan as a comforting and satisfying meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chicken Teriyaki':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken thighs or breasts, boneless and skinless</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Soy sauce</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mirin (sweet rice wine)</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Sake or dry white wine</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Brown sugar</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Ground ginger</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Cornstarch</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Water</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Sesame seeds</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Green onions, sliced</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Cooked white rice</td>
                    <td>For serving</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the chicken:</div>
                        <div class="ins-content-p">
                            Cut 1.5 pounds of boneless, skinless chicken thighs into bite-sized pieces. Season the chicken with salt and black pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the teriyaki sauce:</div>
                        <div class="ins-content-p">
                            In a bowl, whisk together 1/2 cup of soy sauce, 1/4 cup of sake or white wine, 1/4 cup of mirin, 3 tablespoons of brown sugar, and 1 teaspoon of grated ginger until the sugar is dissolved. This is your teriyaki sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Marinate the chicken:</div>
                        <div class="ins-content-p">
                            Place the chicken pieces in a shallow dish or a zip-top bag. Pour half of the teriyaki sauce over the chicken, ensuring all pieces are coated. Marinate in the refrigerator for at least 30 minutes, or longer for more flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the chicken:</div>
                        <div class="ins-content-p">
                            In a large skillet or wok, heat 2 tablespoons of vegetable oil over medium-high heat. Add the marinated chicken and cook until browned and cooked through, about 5-7 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add remaining sauce:</div>
                        <div class="ins-content-p">
                            Pour the remaining teriyaki sauce over the cooked chicken. Stir well to coat the chicken in the sauce. Let it simmer for an additional 2-3 minutes to thicken the sauce slightly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Chicken Teriyaki with sliced green onions and sesame seeds. Serve over steamed rice or noodles.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Enhance your Chicken Teriyaki by adding vegetables such as broccoli, bell peppers, or snap peas during the cooking process.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this flavorful and easy-to-make Chicken Teriyaki as a delicious Asian-inspired meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chicken Marsala':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken breasts, boneless and skinless</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>All-purpose flour</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Olive oil</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Butter</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Cremini or button mushrooms, sliced</td>
                    <td>8 ounces</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Marsala wine</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chicken broth</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Thyme, fresh or dried</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Fresh parsley, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the chicken:</div>
                        <div class="ins-content-p">
                            Season 4 boneless, skinless chicken breasts with salt and black pepper. Dredge each chicken breast in all-purpose flour, shaking off any excess.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sauté the chicken:</div>
                        <div class="ins-content-p">
                            In a large skillet, heat 2 tablespoons of olive oil and 2 tablespoons of unsalted butter over medium-high heat. Add the dredged chicken breasts and cook until golden brown on both sides, about 4-5 minutes per side. Remove the chicken from the skillet and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the Marsala sauce:</div>
                        <div class="ins-content-p">
                            In the same skillet, add 1 cup of sliced mushrooms. Cook until the mushrooms are browned. Pour in 1 cup of Marsala wine and scrape any browned bits from the bottom of the skillet. Add 1 cup of chicken broth and let the sauce simmer and reduce by half.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add chicken back to skillet:</div>
                        <div class="ins-content-p">
                            Return the cooked chicken breasts to the skillet, nestling them into the Marsala sauce. Simmer for an additional 5-7 minutes, allowing the chicken to absorb the flavors of the sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Chicken Marsala with chopped fresh parsley. Serve the chicken over cooked pasta, rice, or mashed potatoes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Enhance your Chicken Marsala by adding minced garlic or shallots to the sauce, and finishing with a splash of heavy cream for richness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this classic and flavorful Chicken Marsala as a delicious and elegant meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Butter Chicken (Chicken Makhani)':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken thighs or breasts, boneless and skinless</td>
                    <td>1.5 lbs</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Yogurt</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tomato puree</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Heavy cream</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Butter</td>
                    <td>4 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic, minced</td>
                    <td>4 cloves</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Garam masala</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Coriander powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Cumin</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Chili powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Turmeric</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Fresh cilantro, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Marinate the chicken:</div>
                        <div class="ins-content-p">
                            In a bowl, combine 1.5 pounds of boneless, skinless chicken thighs (cut into bite-sized pieces) with 1 cup of plain yogurt, 1 tablespoon of ginger paste, 1 tablespoon of garlic paste, 1 teaspoon of garam masala, 1 teaspoon of turmeric, 1 teaspoon of chili powder, and salt to taste. Allow the chicken to marinate for at least 1-2 hours, or overnight in the refrigerator.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the chicken:</div>
                        <div class="ins-content-p">
                            Heat 2 tablespoons of ghee or butter in a skillet over medium-high heat. Add the marinated chicken and cook until browned and cooked through, about 7-8 minutes. Set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the sauce:</div>
                        <div class="ins-content-p">
                            In the same skillet, add 2 tablespoons of butter. Sauté 1 finely chopped onion until golden brown. Add 1 tablespoon of ginger paste and 1 tablespoon of garlic paste, cooking for an additional 2 minutes. Stir in 1 can (14 ounces) of tomato puree, 1 teaspoon of garam masala, 1 teaspoon of chili powder, 1 teaspoon of turmeric, and salt to taste. Cook the sauce for 10-12 minutes, stirring occasionally.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Blend the sauce:</div>
                        <div class="ins-content-p">
                            Use an immersion blender or transfer the sauce to a blender to achieve a smooth consistency.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add cream and chicken:</div>
                        <div class="ins-content-p">
                            Return the blended sauce to the skillet. Stir in 1 cup of heavy cream and the cooked chicken. Simmer for an additional 10-15 minutes, allowing the flavors to meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Finish with butter:</div>
                        <div class="ins-content-p">
                            Stir in 2 tablespoons of butter to finish the Butter Chicken. Adjust salt and spice levels to your liking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Butter Chicken with chopped fresh cilantro and serve it hot over steamed rice or with naan bread.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this rich and creamy Butter Chicken as a delightful and classic Indian dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chicken Shawarma':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken thighs, boneless and skinless</td>
                    <td>1.5 lbs</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Yogurt</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Garlic, minced</td>
                    <td>4 cloves</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Lemon juice</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Ground cumin</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Ground paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Ground coriander</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Ground turmeric</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Cayenne pepper</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Ground cinnamon</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Plain Greek yogurt</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Pita bread</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Tomatoes, sliced</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Cucumbers, sliced</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Red onion, thinly sliced</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Fresh parsley, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Marinate the chicken:</div>
                        <div class="ins-content-p">
                            In a bowl, mix 1.5 pounds of boneless, skinless chicken thighs with 2 tablespoons of plain yogurt, 3 tablespoons of olive oil, 1 tablespoon of ground cumin, 1 tablespoon of ground paprika, 1 teaspoon of ground turmeric, 1 teaspoon of ground coriander, 1 teaspoon of ground cinnamon, 4 cloves of minced garlic, salt, and black pepper to taste. Allow the chicken to marinate for at least 1-2 hours, or overnight in the refrigerator.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 425°F (220°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Thread the chicken:</div>
                        <div class="ins-content-p">
                            Thread the marinated chicken onto skewers. Place the skewers on a lined baking sheet.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake the chicken:</div>
                        <div class="ins-content-p">
                            Bake the chicken in the preheated oven for 20-25 minutes or until cooked through and slightly charred around the edges.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the sauce:</div>
                        <div class="ins-content-p">
                            In a small bowl, mix together 1/2 cup of tahini, 2 tablespoons of lemon juice, 2 tablespoons of water, 1 clove of minced garlic, and a pinch of salt. This will be your tahini sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Warm the flatbreads:</div>
                        <div class="ins-content-p">
                            While the chicken is baking, warm your flatbreads in the oven or on a skillet.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Assemble the shawarma:</div>
                        <div class="ins-content-p">
                            Remove the cooked chicken from the skewers. Spread a generous amount of tahini sauce on each warm flatbread and top it with the chicken. Add your favorite toppings such as sliced tomatoes, cucumbers, red onions, and fresh herbs.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roll and serve:</div>
                        <div class="ins-content-p">
                            Roll the flatbread into a shawarma wrap and serve immediately. You can also serve with additional tahini sauce on the side.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this delicious and flavorful Chicken Shawarma as a satisfying and authentic Middle Eastern dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chicken Piccata':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken breasts, boneless and skinless</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>All-purpose flour</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Unsalted butter</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chicken broth</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Lemon juice</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Capers, drained</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Parsley, chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Angel hair pasta or pasta of your choice</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Lemon slices</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the chicken:</div>
                        <div class="ins-content-p">
                            Season 4 boneless, skinless chicken breasts with salt and black pepper. Dredge each chicken breast in all-purpose flour, shaking off any excess.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sauté the chicken:</div>
                        <div class="ins-content-p">
                            In a large skillet, heat 2 tablespoons of olive oil and 2 tablespoons of unsalted butter over medium-high heat. Add the dredged chicken breasts and cook until golden brown on both sides, about 4-5 minutes per side. Remove the chicken from the skillet and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the sauce:</div>
                        <div class="ins-content-p">
                            In the same skillet, add 1/2 cup of chicken broth, 1/4 cup of fresh lemon juice, and 1/4 cup of capers. Scrape any browned bits from the bottom of the skillet and let the sauce simmer for 2-3 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add chicken back to skillet:</div>
                        <div class="ins-content-p">
                            Return the cooked chicken breasts to the skillet, nestling them into the piccata sauce. Simmer for an additional 5-7 minutes, allowing the chicken to absorb the flavors of the sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Chicken Piccata with chopped fresh parsley. Serve the chicken over cooked pasta, rice, or mashed potatoes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Enhance your Chicken Piccata by adding minced garlic or shallots to the sauce, and finishing with a splash of white wine for additional flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this classic and flavorful Chicken Piccata as a delicious and elegant meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Grilled Chicken Salad':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken breasts, boneless and skinless</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lemon juice</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Dried oregano</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Romaine lettuce, chopped</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cherry tomatoes, halved</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Cucumber, sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Red onion, thinly sliced</td>
                    <td>1/2</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Kalamata olives</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Feta cheese, crumbled</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Greek dressing</td>
                    <td>For drizzling</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Marinate the chicken:</div>
                        <div class="ins-content-p">
                            In a bowl, combine 1.5 pounds of boneless, skinless chicken breasts with 2 tablespoons of olive oil, 2 cloves of minced garlic, 1 teaspoon of dried oregano, 1 teaspoon of dried thyme, salt, and black pepper to taste. Allow the chicken to marinate for at least 30 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Grill the chicken:</div>
                        <div class="ins-content-p">
                            Preheat your grill or grill pan over medium-high heat. Grill the marinated chicken for 6-8 minutes per side or until the internal temperature reaches 165°F (74°C). Let the chicken rest for a few minutes before slicing it into strips.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the salad:</div>
                        <div class="ins-content-p">
                            In a large bowl, toss together mixed salad greens, cherry tomatoes, cucumber slices, red onion rings, and any other desired salad vegetables.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the dressing:</div>
                        <div class="ins-content-p">
                            In a small bowl, whisk together 3 tablespoons of balsamic vinegar, 1/4 cup of extra virgin olive oil, 1 teaspoon of Dijon mustard, 1 clove of minced garlic, salt, and black pepper to taste. This will be your salad dressing.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Assemble the salad:</div>
                        <div class="ins-content-p">
                            Drizzle the dressing over the salad and toss to combine. Top the salad with the grilled chicken strips.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Grilled Chicken Salad with crumbled feta cheese, chopped fresh basil, and a sprinkle of pine nuts. Serve immediately.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Customize your Grilled Chicken Salad by adding avocado slices, grilled corn, or your favorite salad toppings.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this fresh and flavorful Grilled Chicken Salad as a healthy and satisfying meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Honey Mustard Glazed Chicken':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chicken thighs, boneless and skinless</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Dijon mustard</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Honey</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Soy sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Garlic powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Smoked paprika</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Vegetable oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Fresh parsley, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 400°F (200°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the chicken:</div>
                        <div class="ins-content-p">
                            Season 4 boneless, skinless chicken breasts with salt and black pepper. Place the chicken in a baking dish.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the honey mustard glaze:</div>
                        <div class="ins-content-p">
                            In a bowl, whisk together 1/4 cup of Dijon mustard, 3 tablespoons of honey, 1 tablespoon of whole grain mustard, 1 tablespoon of soy sauce, 2 cloves of minced garlic, and 1 tablespoon of olive oil.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Coat the chicken:</div>
                        <div class="ins-content-p">
                            Pour the honey mustard glaze over the seasoned chicken, ensuring each breast is coated evenly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Bake the chicken in the preheated oven for 20-25 minutes or until the internal temperature reaches 165°F (74°C) and the glaze is caramelized.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Honey Mustard Glazed Chicken with chopped fresh parsley or green onions. Serve the chicken over rice, quinoa, or your favorite side.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Enhance the dish by adding roasted vegetables to the baking dish during the last 15 minutes of cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this sweet and tangy Honey Mustard Glazed Chicken for a delicious and easy-to-make meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chicken Enchiladas':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Shredded cooked chicken</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Flour tortillas</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Enchilada sauce</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Shredded cheddar cheese</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Chopped green onions</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Sour cream</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chopped fresh cilantro</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Minced garlic</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Ground cumin</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the chicken:</div>
                        <div class="ins-content-p">
                            In a skillet over medium heat, cook 1 pound of boneless, skinless chicken breasts until fully cooked. Shred the cooked chicken using two forks.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the filling:</div>
                        <div class="ins-content-p">
                            In a bowl, combine the shredded chicken with 1 cup of shredded cheddar cheese, 1 cup of diced tomatoes, 1/2 cup of diced green onions, 1/2 cup of chopped cilantro, 1 teaspoon of ground cumin, 1 teaspoon of chili powder, and salt to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Warm the tortillas:</div>
                        <div class="ins-content-p">
                            Warm 8 large flour tortillas in the microwave or on a skillet to make them pliable.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fill and roll the enchiladas:</div>
                        <div class="ins-content-p">
                            Place a portion of the chicken filling onto each tortilla, roll them up, and place them seam side down in a greased baking dish.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the enchilada sauce:</div>
                        <div class="ins-content-p">
                            In a saucepan, combine 2 cups of red enchilada sauce and 1/2 cup of sour cream. Heat the mixture over medium heat until warmed through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Pour sauce over enchiladas:</div>
                        <div class="ins-content-p">
                            Pour the enchilada sauce over the rolled enchiladas in the baking dish, ensuring they are fully covered.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add cheese topping:</div>
                        <div class="ins-content-p">
                            Sprinkle an additional 1 cup of shredded cheddar cheese over the top of the enchiladas.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Bake the enchiladas in the preheated oven for 20-25 minutes or until the cheese is melted and bubbly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the Chicken Enchiladas with additional chopped cilantro and diced tomatoes. Serve hot and enjoy!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    // -------------------------------------------------------beef--------------------------------------------------------- 

    'Beef Tenderloin':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Beef tenderloin, whole</td>
                    <td>1 (about 4 pounds)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Garlic cloves, minced</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Fresh rosemary, chopped</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Salt</td>
                    <td>2 teaspoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Black pepper</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Beef broth</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Red wine</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Butter, unsalted</td>
                    <td>2 tablespoons</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 425°F (220°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the beef tenderloin:</div>
                        <div class="ins-content-p">
                            Pat dry a 2 to 3-pound beef tenderloin with paper towels. Tie the tenderloin with kitchen twine at 1-inch intervals to help it maintain its shape during cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the beef:</div>
                        <div class="ins-content-p">
                            Rub the beef tenderloin with olive oil and season generously with salt, black pepper, and any desired herbs or spices such as thyme, rosemary, or garlic powder.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the beef:</div>
                        <div class="ins-content-p">
                            In an oven-safe skillet over high heat, sear the beef on all sides until it develops a golden brown crust. This should take about 2-3 minutes per side.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Transfer to the oven:</div>
                        <div class="ins-content-p">
                            Transfer the skillet with the seared beef tenderloin to the preheated oven.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roast in the oven:</div>
                        <div class="ins-content-p">
                            Roast the beef in the oven for about 15-20 minutes for medium-rare, or adjust the cooking time according to your desired level of doneness. Use a meat thermometer to check the internal temperature.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest and slice:</div>
                        <div class="ins-content-p">
                            Once cooked to your liking, remove the beef from the oven, tent it with foil, and let it rest for 10-15 minutes. This allows the juices to redistribute. Slice the beef tenderloin into thick slices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Arrange the sliced beef on a serving platter. Optionally, drizzle with any pan juices or a simple sauce of your choice. Serve and enjoy your perfectly cooked Beef Tenderloin!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Ribeye Steak':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ribeye steaks</td>
                    <td>2 (about 1 pound each)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Garlic cloves, minced</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Fresh thyme, chopped</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Salt</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Black pepper</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Butter, unsalted</td>
                    <td>2 tablespoons</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the grill or skillet:</div>
                        <div class="ins-content-p">
                            Preheat your grill or cast-iron skillet over high heat. Aim for a high temperature to achieve a good sear on the ribeye steak.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the ribeye:</div>
                        <div class="ins-content-p">
                            Take the ribeye steak out of the refrigerator and let it come to room temperature for about 30 minutes. Pat it dry with paper towels to remove any excess moisture. This helps in achieving a better sear.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the steak:</div>
                        <div class="ins-content-p">
                            Rub the ribeye steak with olive oil and season generously with salt and black pepper. Optionally, you can add garlic powder, onion powder, or your favorite steak seasoning.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the ribeye:</div>
                        <div class="ins-content-p">
                            Place the ribeye steak on the hot grill or skillet. Sear the steak for 3-4 minutes on each side for medium-rare, adjusting the time according to your preferred doneness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check the temperature:</div>
                        <div class="ins-content-p">
                            Use a meat thermometer to check the internal temperature of the steak. For medium-rare, aim for an internal temperature of around 130°F (54°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest the steak:</div>
                        <div class="ins-content-p">
                            Remove the ribeye from the grill or skillet and let it rest for at least 5 minutes. This allows the juices to redistribute and ensures a juicy steak.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice and serve:</div>
                        <div class="ins-content-p">
                            Slice the ribeye steak against the grain into desired portions. Serve immediately and enjoy your perfectly cooked Ribeye Steak!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Consider adding a pat of butter or a drizzle of balsamic glaze over the sliced steak for extra flavor.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Sirloin Steak':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Sirloin steaks</td>
                    <td>2 (about 1 pound each)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Minced garlic</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Fresh rosemary, chopped</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Salt</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Black pepper</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Worcestershire sauce</td>
                    <td>1 tablespoon</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the grill or skillet:</div>
                        <div class="ins-content-p">
                            Preheat your grill or cast-iron skillet over medium-high to high heat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the sirloin steak:</div>
                        <div class="ins-content-p">
                            Take the sirloin steak out of the refrigerator and let it come to room temperature for about 30 minutes. Pat it dry with paper towels to remove any excess moisture.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the steak:</div>
                        <div class="ins-content-p">
                            Rub the sirloin steak with olive oil and season it with salt and black pepper. Optionally, you can add garlic powder, onion powder, or your preferred steak seasoning.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the sirloin:</div>
                        <div class="ins-content-p">
                            Place the sirloin steak on the hot grill or skillet. Sear the steak for 4-5 minutes on each side for medium-rare, adjusting the time according to your preferred doneness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check the temperature:</div>
                        <div class="ins-content-p">
                            Use a meat thermometer to check the internal temperature of the steak. For medium-rare, aim for an internal temperature of around 130°F (54°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest the steak:</div>
                        <div class="ins-content-p">
                            Remove the sirloin from the grill or skillet and let it rest for at least 5 minutes. This allows the juices to redistribute, resulting in a juicier steak.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice and serve:</div>
                        <div class="ins-content-p">
                            Slice the sirloin steak against the grain into desired portions. Serve immediately and enjoy your deliciously cooked Sirloin Steak!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Consider serving the sirloin steak with a flavorful sauce or compound butter for added taste.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Flank Steak':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Flank steak</td>
                    <td>1 (about 1.5 pounds)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Soy sauce</td>
                    <td>1/3 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Minced garlic</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Ground ginger</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Honey</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Rice vinegar</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Sesame oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Green onions, sliced (for garnish)</td>
                    <td>Optional</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Sesame seeds (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Marinate the flank steak:</div>
                        <div class="ins-content-p">
                            In a bowl, prepare a marinade by combining 1/4 cup of soy sauce, 2 tablespoons of olive oil, 2 tablespoons of balsamic vinegar, 2 cloves of minced garlic, 1 teaspoon of honey, 1 teaspoon of Dijon mustard, and black pepper to taste. Place the flank steak in a resealable plastic bag and pour the marinade over it. Marinate for at least 30 minutes or up to 24 hours in the refrigerator.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the grill or skillet:</div>
                        <div class="ins-content-p">
                            Preheat your grill or cast-iron skillet over high heat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Remove excess marinade:</div>
                        <div class="ins-content-p">
                            Take the flank steak out of the marinade, allowing excess marinade to drip off. Pat the steak dry with paper towels to promote better searing.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Grill or sear the flank steak:</div>
                        <div class="ins-content-p">
                            Grill the flank steak for 4-6 minutes per side for medium-rare, or adjust the time according to your preferred doneness. Alternatively, sear the steak in a hot skillet for the same amount of time.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest the steak:</div>
                        <div class="ins-content-p">
                            Remove the flank steak from the grill or skillet and let it rest for 5-10 minutes. This allows the juices to redistribute, resulting in a juicier steak.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice against the grain:</div>
                        <div class="ins-content-p">
                            Slice the flank steak thinly against the grain to ensure tenderness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Arrange the sliced flank steak on a serving platter. You can garnish with chopped fresh cilantro or green onions. Serve and enjoy your flavorful Grilled Flank Steak!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Consider serving the flank steak with a side of grilled vegetables, rice, or a fresh salad.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Skirt Steak':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Skirt steak</td>
                    <td>1.5 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lime juice</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Minced garlic</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Ground cumin</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Chili powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Smoked paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Salt</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Black pepper</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Fresh cilantro, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Marinate the skirt steak:</div>
                        <div class="ins-content-p">
                            In a bowl, prepare a marinade by combining 1/4 cup of soy sauce, 2 tablespoons of olive oil, 2 cloves of minced garlic, 1 tablespoon of Worcestershire sauce, 1 tablespoon of lime juice, 1 teaspoon of ground cumin, and black pepper to taste. Place the skirt steak in a resealable plastic bag and pour the marinade over it. Marinate for at least 30 minutes or up to 24 hours in the refrigerator.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Preheat the grill or skillet:</div>
                        <div class="ins-content-p">
                            Preheat your grill or cast-iron skillet over high heat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Remove excess marinade:</div>
                        <div class="ins-content-p">
                            Take the skirt steak out of the marinade, allowing excess marinade to drip off. Pat the steak dry with paper towels to promote better searing.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Grill or sear the skirt steak:</div>
                        <div class="ins-content-p">
                            Grill the skirt steak for 2-4 minutes per side for medium-rare, or adjust the time according to your preferred doneness. Alternatively, sear the steak in a hot skillet for the same amount of time.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest the steak:</div>
                        <div class="ins-content-p">
                            Remove the skirt steak from the grill or skillet and let it rest for 5 minutes. This allows the juices to redistribute, resulting in a juicier steak.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice against the grain:</div>
                        <div class="ins-content-p">
                            Slice the skirt steak thinly against the grain to ensure tenderness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Arrange the sliced skirt steak on a serving platter. You can garnish with chopped fresh cilantro or a squeeze of lime juice. Serve and enjoy your delicious Grilled Skirt Steak!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Consider serving the skirt steak with warm tortillas, pico de gallo, and guacamole for a tasty fajita experience.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Chuck Roast':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chuck roast</td>
                    <td>1 (about 3-4 pounds)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Beef broth</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Red wine</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Onions, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Carrots, peeled and sliced</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Potatoes, peeled and diced</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Garlic cloves, minced</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Thyme, dried</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Rosemary, dried</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 325°F (163°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the chuck roast:</div>
                        <div class="ins-content-p">
                            Generously season a 3-4 pound chuck roast with salt and black pepper. Optionally, you can add garlic powder, onion powder, and dried herbs like thyme or rosemary for extra flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the chuck roast:</div>
                        <div class="ins-content-p">
                            In a large oven-safe pot or Dutch oven, heat 2 tablespoons of vegetable oil over medium-high heat. Sear the chuck roast on all sides until browned. This enhances the flavor and locks in juices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add aromatics and liquid:</div>
                        <div class="ins-content-p">
                            Add 1 diced onion, 2-3 carrots, and 2-3 celery stalks to the pot. Pour in 2 cups of beef broth or red wine to deglaze the pan and scrape up any browned bits.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roast in the oven:</div>
                        <div class="ins-content-p">
                            Cover the pot with a lid and transfer it to the preheated oven. Roast for approximately 2.5 to 3 hours or until the chuck roast is fork-tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check the doneness:</div>
                        <div class="ins-content-p">
                            Use a fork to check if the chuck roast is tender. If it easily shreds, it's done. If not, continue roasting and checking every 30 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest and slice:</div>
                        <div class="ins-content-p">
                            Remove the pot from the oven and let the chuck roast rest for 10-15 minutes. Slice the roast against the grain into thick slices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Arrange the sliced chuck roast on a serving platter. Spoon some of the cooking liquid and vegetables over the top. Serve with mashed potatoes, rice, or your favorite side dishes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this tender and flavorful Chuck Roast as a comforting and satisfying meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Brisket':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Beef brisket</td>
                    <td>1 (about 4-6 pounds)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Yellow mustard</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Beef rub or seasoning</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Onion powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Smoked paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Brown sugar</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Apple cider vinegar</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Beef broth</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Worcestershire sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Liquid smoke</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 275°F (135°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Trim and season the brisket:</div>
                        <div class="ins-content-p">
                            Trim excess fat from a 5-6 pound beef brisket, leaving about 1/4 inch of fat. Season the brisket generously with salt and black pepper. Optionally, you can add garlic powder, onion powder, and paprika for additional flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the brisket:</div>
                        <div class="ins-content-p">
                            In a large oven-safe pot or Dutch oven, heat 2 tablespoons of vegetable oil over medium-high heat. Sear the brisket on all sides until browned to enhance the flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add aromatics and liquid:</div>
                        <div class="ins-content-p">
                            Add 1 diced onion, 4 cloves of minced garlic, and 2 cups of beef broth to the pot. You can also add 1 cup of red wine for added richness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cover and roast:</div>
                        <div class="ins-content-p">
                            Cover the pot with a lid or tightly with foil. Transfer it to the preheated oven and roast for approximately 4-5 hours, or until the brisket is fork-tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check the doneness:</div>
                        <div class="ins-content-p">
                            Use a fork to check if the brisket is tender. If it easily shreds, it's done. If not, continue roasting and checking every 30 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest and slice:</div>
                        <div class="ins-content-p">
                            Remove the pot from the oven and let the brisket rest for 15-20 minutes. Slice the brisket against the grain into thick slices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Arrange the sliced brisket on a serving platter. Spoon some of the cooking liquid and onions over the top. Serve with your favorite side dishes, such as mashed potatoes or coleslaw.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy this tender and flavorful Brisket as a hearty and satisfying meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Beef Short Ribs':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Beef short ribs</td>
                    <td>4 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Onions, chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Carrots, peeled and chopped</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Celery, chopped</td>
                    <td>2 stalks</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic cloves, minced</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Tomato paste</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Red wine</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Beef broth</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Fresh thyme</td>
                    <td>2 sprigs</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Bay leaves</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 325°F (163°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the short ribs:</div>
                        <div class="ins-content-p">
                            Season 4-5 pounds of beef short ribs with salt and black pepper. Optionally, you can add garlic powder, onion powder, and smoked paprika for additional flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the short ribs:</div>
                        <div class="ins-content-p">
                            In a large oven-safe pot or Dutch oven, heat 2 tablespoons of vegetable oil over medium-high heat. Sear the short ribs on all sides until browned to enhance the flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add aromatics and liquid:</div>
                        <div class="ins-content-p">
                            Add 1 diced onion, 2 carrots, and 2 celery stalks to the pot. Pour in 2 cups of beef broth, 1 cup of red wine, and 2 tablespoons of tomato paste. Stir to combine.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cover and braise:</div>
                        <div class="ins-content-p">
                            Cover the pot with a lid and transfer it to the preheated oven. Braise the short ribs for approximately 2.5 to 3 hours or until the meat is fork-tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check the doneness:</div>
                        <div class="ins-content-p">
                            Use a fork to check if the short ribs are tender. If the meat easily pulls away from the bone, they are done.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest and serve:</div>
                        <div class="ins-content-p">
                            Remove the pot from the oven and let the short ribs rest for 10-15 minutes. Skim off excess fat from the cooking liquid. Serve the short ribs over mashed potatoes or polenta, spooning the flavorful sauce on top.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and enjoy:</div>
                        <div class="ins-content-p">
                            Garnish with chopped fresh parsley or thyme. Enjoy these succulent and savory Beef Short Ribs as a comforting and delicious meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Ground Beef (For Various Dishes)':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ground beef</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Onion, finely chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Garlic cloves, minced</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Olive oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tomato sauce</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Tomato paste</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Beef broth</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Chili powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cumin</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Paprika</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prep the ingredients:</div>
                        <div class="ins-content-p">
                            Start by finely chopping 1 onion and mincing 2-3 cloves of garlic. If desired, you can also chop bell peppers, carrots, or other vegetables for added flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sauté the aromatics:</div>
                        <div class="ins-content-p">
                            In a large skillet or frying pan, heat 1-2 tablespoons of cooking oil over medium heat. Add the chopped onions and garlic, and sauté until softened and fragrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the ground beef:</div>
                        <div class="ins-content-p">
                            Add 1 pound of ground beef to the skillet. Break it apart with a spatula and cook until browned. Stir occasionally to ensure even cooking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the beef:</div>
                        <div class="ins-content-p">
                            Season the ground beef with salt, black pepper, and any desired herbs or spices. Common additions include cumin, paprika, oregano, or chili powder, depending on your recipe.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drain excess fat:</div>
                        <div class="ins-content-p">
                            If there is excess fat in the pan, carefully drain it off using a spoon or by tilting the pan and soaking it up with paper towels.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add sauces or liquids:</div>
                        <div class="ins-content-p">
                            Depending on your dish, add sauces like tomato sauce, soy sauce, or broth to enhance flavor. Simmer for a few minutes to allow the flavors to meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Adjust seasoning:</div>
                        <div class="ins-content-p">
                            Taste the ground beef mixture and adjust the seasoning if necessary. Add more salt, pepper, or herbs to suit your preferences.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Your cooked ground beef is now ready to be used in various dishes. Serve it over pasta, in tacos, on pizza, or as a filling for burritos and sandwiches.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your versatile cooked ground beef in your favorite recipes!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Beef Stir-Fry Strips':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Beef sirloin or flank steak, thinly sliced</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Soy sauce</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Oyster sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Sesame oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Cornstarch</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Broccoli florets</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Bell peppers, sliced</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Sliced green onions (for garnish)</td>
                    <td>Optional</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Sesame seeds (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the beef strips:</div>
                        <div class="ins-content-p">
                            Start with 1 pound of beef sirloin or flank steak. Slice the beef thinly into strips, about 1/4 inch wide. Make sure to cut against the grain for tenderness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Marinate the beef:</div>
                        <div class="ins-content-p">
                            In a bowl, combine 2 tablespoons of soy sauce, 1 tablespoon of oyster sauce, 1 tablespoon of hoisin sauce, 1 teaspoon of sesame oil, and 1 tablespoon of cornstarch. Add the beef strips to the marinade, ensuring they are well-coated. Let it marinate for at least 15-30 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare vegetables:</div>
                        <div class="ins-content-p">
                            Chop your choice of vegetables for the stir-fry. Common options include bell peppers, broccoli, carrots, snap peas, and onions.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Heat the wok or skillet:</div>
                        <div class="ins-content-p">
                            Heat a wok or large skillet over high heat. Add 2 tablespoons of vegetable oil and let it become hot.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Stir-fry the beef:</div>
                        <div class="ins-content-p">
                            Add the marinated beef strips to the hot wok. Stir-fry for 2-3 minutes or until the beef is browned and cooked through. Remove the beef from the wok and set it aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Stir-fry the vegetables:</div>
                        <div class="ins-content-p">
                            In the same wok, add more oil if needed. Add the chopped vegetables and stir-fry for 3-4 minutes until they are crisp-tender but still vibrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine and season:</div>
                        <div class="ins-content-p">
                            Return the cooked beef strips to the wok with the vegetables. Toss everything together. Season with additional soy sauce or salt if needed.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the beef stir-fry strips over rice or noodles. Garnish with chopped green onions or sesame seeds if desired. Enjoy your delicious and quick Beef Stir-Fry!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Customize your stir-fry with ingredients like garlic, ginger, or red pepper flakes for added flavor.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    // -------------------------------------------------------------------Fish And Sea Food-------------------------------------------------------------------

    'Grilled Salmon':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Salmon fillets</td>
                    <td>4 (about 6 ounces each)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lemon juice</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Minced garlic</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Dijon mustard</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Maple syrup</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Soy sauce</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Fresh dill, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Lemon slices (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the grill:</div>
                        <div class="ins-content-p">
                            Preheat your grill to medium-high heat. Clean and oil the grill grates to prevent sticking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the salmon:</div>
                        <div class="ins-content-p">
                            Pat dry 4 salmon fillets with paper towels. Brush the fillets with olive oil to prevent sticking and enhance flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the salmon:</div>
                        <div class="ins-content-p">
                            Season the salmon with salt, black pepper, and your choice of herbs or spices. Common options include dill, lemon zest, garlic powder, or paprika.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Grill the salmon:</div>
                        <div class="ins-content-p">
                            Place the seasoned salmon fillets on the preheated grill, skin side down. Grill for 4-6 minutes per side, depending on the thickness of the fillets. The salmon is ready when it easily flakes with a fork.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add a smoky flavor:</div>
                        <div class="ins-content-p">
                            If you want a smoky flavor, you can use wood chips or a cedar plank. Soak the wood chips or plank in water for 30 minutes before grilling.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check for doneness:</div>
                        <div class="ins-content-p">
                            Use a fork to check if the salmon flakes easily. The internal temperature should reach 145°F (63°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Carefully remove the grilled salmon from the grill and transfer it to a serving platter. Garnish with fresh herbs, lemon wedges, or a drizzle of olive oil. Serve hot and enjoy!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional sides:</div>
                        <div class="ins-content-p">
                            Serve the grilled salmon with sides like a fresh salad, steamed vegetables, or couscous for a complete and delicious meal.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Baked Cod With Lemon And Herbs':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Cod fillets</td>
                    <td>4 (about 6 ounces each)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lemon, thinly sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic cloves, minced</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Fresh parsley, chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Fresh thyme, chopped</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Paprika</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Butter, melted</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>White wine or chicken broth</td>
                    <td>1/4 cup</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper or lightly grease it.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the cod fillets:</div>
                        <div class="ins-content-p">
                            Pat dry 4 cod fillets with paper towels. Place the fillets on the prepared baking sheet.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the cod:</div>
                        <div class="ins-content-p">
                            Drizzle the cod fillets with olive oil. Season them with salt, black pepper, and your choice of herbs. Recommended herbs include chopped fresh parsley, thyme, and a pinch of dried oregano.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add lemon:</div>
                        <div class="ins-content-p">
                            Thinly slice a lemon, and place lemon slices on top of each cod fillet. Squeeze additional lemon juice over the fillets for extra flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake the cod:</div>
                        <div class="ins-content-p">
                            Bake the cod in the preheated oven for 12-15 minutes or until the fish is opaque and easily flakes with a fork.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Broil for a golden crust:</div>
                        <div class="ins-content-p">
                            Optional: Turn on the broiler for the last 1-2 minutes to give the cod a golden crust on top.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check for doneness:</div>
                        <div class="ins-content-p">
                            Check the internal temperature of the cod; it should reach 145°F (63°C). Ensure the flesh is opaque and easily flakes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Carefully remove the baked cod from the oven. Serve the fillets on individual plates, garnished with additional fresh herbs and lemon wedges.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional sides:</div>
                        <div class="ins-content-p">
                            Pair the baked cod with sides like roasted vegetables, couscous, or a fresh green salad for a balanced and delicious meal.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your flavorful Baked Cod with Lemon and Herbs!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Fish Tacos With Chipotle Crema':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>White fish fillets (such as cod or tilapia)</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Flour tortillas</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Shredded cabbage</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tomatoes, diced</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Red onion, finely chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Fresh cilantro, chopped</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Lime wedges</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>For Chipotle Crema:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Mayonnaise</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Plain Greek yogurt</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Lime juice</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Chipotle pepper in adobo sauce, minced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Garlic powder</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the fish:</div>
                        <div class="ins-content-p">
                            Pat dry 1 pound of white fish fillets (such as cod or tilapia) with paper towels. Season the fillets with a mixture of 1 teaspoon of ground cumin, 1 teaspoon of chili powder, salt, and black pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the chipotle crema:</div>
                        <div class="ins-content-p">
                            In a bowl, mix 1/2 cup of sour cream, 1 tablespoon of mayonnaise, 1 tablespoon of adobo sauce from canned chipotle peppers, and a squeeze of lime juice. Adjust the adobo sauce to your desired level of spiciness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the taco toppings:</div>
                        <div class="ins-content-p">
                            Chop fresh ingredients for toppings, such as shredded cabbage, diced tomatoes, sliced red onions, and chopped cilantro. Slice a lime for serving.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the fish:</div>
                        <div class="ins-content-p">
                            Heat 2 tablespoons of vegetable oil in a skillet over medium-high heat. Cook the seasoned fish fillets for 3-4 minutes per side or until they are golden brown and cooked through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Warm the tortillas:</div>
                        <div class="ins-content-p">
                            Heat the corn tortillas on a griddle or in a dry skillet until they are warm and pliable.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Assemble the tacos:</div>
                        <div class="ins-content-p">
                            Place a spoonful of chipotle crema on each tortilla. Add a portion of the cooked fish and top with shredded cabbage, diced tomatoes, sliced red onions, and chopped cilantro.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve the fish tacos with additional lime wedges on the side. Enjoy the delicious combination of flavors and textures!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Customize your fish tacos with extras like avocado slices, salsa, or pickled jalapeños for added flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your Fish Tacos with Chipotle Crema for a tasty and satisfying meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Lemon Garlic Butter Baked Tilapia':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tilapia fillets</td>
                    <td>4 (about 6 ounces each)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Unsalted butter, melted</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Garlic cloves, minced</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Lemon, juiced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Lemon zest</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Fresh parsley, chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Paprika</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>White wine or chicken broth</td>
                    <td>1/4 cup</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper or lightly grease it.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the tilapia fillets:</div>
                        <div class="ins-content-p">
                            Pat dry 4 tilapia fillets with paper towels. Place the fillets on the prepared baking sheet.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the lemon garlic butter sauce:</div>
                        <div class="ins-content-p">
                            In a small saucepan, melt 1/2 cup (1 stick) of unsalted butter. Add 3 minced garlic cloves, the juice of one lemon, 1 teaspoon of lemon zest, and a pinch of dried parsley. Stir the mixture until well combined.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the tilapia:</div>
                        <div class="ins-content-p">
                            Brush the tilapia fillets with the prepared lemon garlic butter sauce. Season the fillets with salt and black pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake the tilapia:</div>
                        <div class="ins-content-p">
                            Bake the tilapia in the preheated oven for 12-15 minutes or until the fish is opaque and easily flakes with a fork.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Broil for a golden finish:</div>
                        <div class="ins-content-p">
                            Optional: Turn on the broiler for the last 1-2 minutes to give the tilapia a golden finish on top.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Check for doneness:</div>
                        <div class="ins-content-p">
                            Check the internal temperature of the tilapia; it should reach 145°F (63°C). Ensure the fish is opaque and easily flakes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Carefully remove the baked tilapia from the oven. Serve the fillets on individual plates, drizzled with additional lemon garlic butter sauce. Garnish with fresh parsley or lemon wedges if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional sides:</div>
                        <div class="ins-content-p">
                            Pair the Lemon Garlic Butter Baked Tilapia with sides like steamed vegetables, rice, or a fresh green salad for a complete and delicious meal.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your flavorful and easy-to-make Lemon Garlic Butter Baked Tilapia!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Coconut Curry Salmon':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Salmon fillets</td>
                    <td>4 (about 6 ounces each)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Coconut milk</td>
                    <td>1 can (14 ounces)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Red curry paste</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Fish sauce</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Brown sugar</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Lime juice</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Minced garlic</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Fresh ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Red bell pepper, thinly sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Green onions, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Cilantro, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the salmon:</div>
                        <div class="ins-content-p">
                            Pat dry 4 salmon fillets with paper towels. Season the fillets with salt and black pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the coconut curry sauce:</div>
                        <div class="ins-content-p">
                            In a saucepan, heat 1 tablespoon of vegetable oil over medium heat. Add 1 tablespoon of red curry paste and cook for 1-2 minutes until fragrant. Stir in 1 can (13.5 oz) of coconut milk, 1 tablespoon of soy sauce, 1 tablespoon of brown sugar, and the juice of one lime. Simmer for 5-7 minutes until the sauce thickens slightly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the salmon:</div>
                        <div class="ins-content-p">
                            Place the seasoned salmon fillets in a baking dish. Pour half of the coconut curry sauce over the fillets, ensuring they are well-coated. Reserve the remaining sauce for serving.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake the salmon:</div>
                        <div class="ins-content-p">
                            Bake the salmon in a preheated oven at 375°F (190°C) for 15-20 minutes or until the fish is cooked through and flakes easily with a fork.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Remove the baked salmon from the oven. Garnish with chopped fresh cilantro and sliced green onions. Serve the salmon over rice or noodles, drizzled with the reserved coconut curry sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Customize your Coconut Curry Salmon by adding vegetables like bell peppers, spinach, or cherry tomatoes to the curry sauce for added flavor and nutrition.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your delicious Coconut Curry Salmon with the rich and flavorful coconut curry sauce!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Shrimp Scampi':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Large shrimp, peeled and deveined</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Spaghetti or linguine</td>
                    <td>8 ounces</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Unsalted butter</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Minced garlic</td>
                    <td>4 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>White wine</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Lemon juice</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Red pepper flakes</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Fresh parsley, chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Grated Parmesan cheese (for serving)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the shrimp:</div>
                        <div class="ins-content-p">
                            Peel and devein 1 pound of large shrimp. Pat them dry with paper towels and season with salt and black pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the pasta:</div>
                        <div class="ins-content-p">
                            Cook 8 ounces of your favorite pasta according to the package instructions. Drain and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the scampi sauce:</div>
                        <div class="ins-content-p">
                            In a large skillet, heat 2 tablespoons of olive oil over medium heat. Add 4 minced garlic cloves and sauté for 1-2 minutes until fragrant. Add 1/2 teaspoon of red pepper flakes for a hint of heat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the shrimp:</div>
                        <div class="ins-content-p">
                            Add the seasoned shrimp to the skillet and cook for 2-3 minutes on each side or until they turn pink and opaque.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add lemon and wine:</div>
                        <div class="ins-content-p">
                            Squeeze the juice of one lemon into the skillet. Pour in 1/4 cup of white wine and let it simmer for 2 minutes to reduce slightly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Finish the dish:</div>
                        <div class="ins-content-p">
                            Toss the cooked pasta into the skillet with the shrimp and scampi sauce. Add 2 tablespoons of chopped fresh parsley and toss everything together until well combined.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Plate the Shrimp Scampi, garnish with additional parsley, and serve immediately. Optionally, sprinkle with grated Parmesan cheese for extra flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your delicious Shrimp Scampi with perfectly cooked shrimp, flavorful sauce, and al dente pasta!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Lobster Bisque':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Lobster tails</td>
                    <td>2 (about 8 ounces each)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Unsalted butter</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Onion, chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Carrot, chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Celery, chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic cloves, minced</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>All-purpose flour</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Tomato paste</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Cognac or brandy</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Chicken or seafood broth</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Heavy cream</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Paprika</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Cayenne pepper</td>
                    <td>1/4 teaspoon</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Fresh chives, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the lobster:</div>
                        <div class="ins-content-p">
                            If using live lobsters, boil or steam them until fully cooked. Remove the lobster meat from the shells and set aside. If using pre-cooked lobster meat, ensure it's thawed and ready to use.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make lobster stock:</div>
                        <div class="ins-content-p">
                            In a large pot, combine the lobster shells, 1 onion (quartered), 2 carrots (chopped), 2 celery stalks (chopped), 2 cloves of garlic (crushed), a bay leaf, and 8 cups of water. Bring to a boil, then reduce heat and simmer for 30-45 minutes. Strain the stock and discard solids.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the vegetables:</div>
                        <div class="ins-content-p">
                            In a separate pot, melt 4 tablespoons of unsalted butter. Add 1 onion (finely chopped), 2 carrots (diced), and 2 celery stalks (diced). Cook until vegetables are softened.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add flour and tomato paste:</div>
                        <div class="ins-content-p">
                            Sprinkle 1/2 cup of all-purpose flour over the vegetables and stir to combine. Cook for 2-3 minutes. Add 2 tablespoons of tomato paste and continue to cook for another 2 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Pour in lobster stock:</div>
                        <div class="ins-content-p">
                            Gradually add the strained lobster stock to the pot, stirring constantly to avoid lumps. Bring the mixture to a simmer and let it cook for 15-20 minutes until slightly thickened.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Blend the bisque:</div>
                        <div class="ins-content-p">
                            Use an immersion blender or transfer the soup to a blender (in batches) to puree until smooth. Be cautious as the mixture will be hot.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add cream and lobster meat:</div>
                        <div class="ins-content-p">
                            Stir in 1 cup of heavy cream and the reserved lobster meat. Simmer for an additional 5-10 minutes until heated through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season and serve:</div>
                        <div class="ins-content-p">
                            Season the lobster bisque with salt, black pepper, and a pinch of cayenne pepper for a hint of spice. Garnish with chopped fresh parsley. Serve hot and enjoy!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional: Lobster garnish:</div>
                        <div class="ins-content-p">
                            For an elegant presentation, reserve some lobster meat to garnish each serving before serving.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your luxurious Lobster Bisque, a rich and flavorful soup perfect for special occasions!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Clam Chowder':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Clams, shucked</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bacon, chopped</td>
                    <td>4 slices</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Butter</td>
                    <td>3 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Onion, finely chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Celery, diced</td>
                    <td>2 stalks</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>All-purpose flour</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Chicken broth</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Heavy cream</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Thyme, dried</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Bay leaves</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Potatoes, diced</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Fresh parsley, chopped (for garnish)</td>
                    <td>Optional</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Cook the bacon:</div>
                        <div class="ins-content-p">
                            In a large pot, cook 6 slices of bacon until crispy. Remove the bacon from the pot, crumble it, and set aside. Leave about 2 tablespoons of bacon fat in the pot.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sauté vegetables:</div>
                        <div class="ins-content-p">
                            Add 1 finely chopped onion, 2 celery stalks (diced), and 1 carrot (diced) to the pot with the bacon fat. Sauté until the vegetables are softened, about 5 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add flour:</div>
                        <div class="ins-content-p">
                            Sprinkle 1/4 cup of all-purpose flour over the sautéed vegetables. Stir to coat the vegetables in the flour and cook for an additional 2 minutes to remove the raw taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Pour in chicken broth:</div>
                        <div class="ins-content-p">
                            Gradually pour in 4 cups of chicken broth, stirring constantly to avoid lumps. Bring the mixture to a simmer and cook until it thickens slightly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add potatoes:</div>
                        <div class="ins-content-p">
                            Add 3 cups of diced potatoes to the pot. Simmer until the potatoes are tender, about 15-20 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Stir in clams and juice:</div>
                        <div class="ins-content-p">
                            Stir in 2 cans (about 24 ounces) of chopped clams with their juice. Continue to simmer for an additional 5 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add dairy and seasoning:</div>
                        <div class="ins-content-p">
                            Pour in 1 cup of heavy cream and season the chowder with salt, black pepper, and a pinch of dried thyme. Adjust seasoning to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Simmer and serve:</div>
                        <div class="ins-content-p">
                            Simmer the clam chowder for an additional 10 minutes to allow the flavors to meld. Ladle the chowder into bowls, garnish with crumbled bacon and chopped fresh parsley.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your delicious homemade Clam Chowder, a comforting and hearty soup perfect for any occasion!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Garlic Butter Shrimp Pasta':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Shrimp, peeled and deveined</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Spaghetti or linguine</td>
                    <td>8 ounces</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Unsalted butter</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Minced garlic</td>
                    <td>4 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Red pepper flakes</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chicken broth</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Heavy cream</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Parmesan cheese, grated</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Fresh parsley, chopped</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Lemon juice</td>
                    <td>1 tablespoon</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Cook the pasta:</div>
                        <div class="ins-content-p">
                            Cook 8 ounces of your favorite pasta in a large pot of salted boiling water according to the package instructions. Drain and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the shrimp:</div>
                        <div class="ins-content-p">
                            In a large skillet, heat 2 tablespoons of olive oil over medium heat. Add 1 pound of large shrimp (peeled and deveined) to the skillet. Cook the shrimp for 2-3 minutes on each side or until they turn pink and opaque. Season with salt and black pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Create the garlic butter sauce:</div>
                        <div class="ins-content-p">
                            Add 4 tablespoons of unsalted butter and 4 minced garlic cloves to the skillet. Sauté the garlic in the butter for 1-2 minutes until fragrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add lemon juice and red pepper flakes:</div>
                        <div class="ins-content-p">
                            Squeeze the juice of one lemon into the skillet. Add a pinch of red pepper flakes for a hint of heat. Stir the ingredients together.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine pasta and shrimp:</div>
                        <div class="ins-content-p">
                            Add the cooked pasta to the skillet with the shrimp and garlic butter sauce. Toss everything together until the pasta is well coated in the sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season and garnish:</div>
                        <div class="ins-content-p">
                            Season the dish with additional salt and black pepper to taste. Garnish with chopped fresh parsley and grated Parmesan cheese if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Plate the Garlic Butter Shrimp Pasta, ensuring each serving has a generous amount of shrimp and flavorful garlic butter sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Optional additions:</div>
                        <div class="ins-content-p">
                            Customize your dish by adding ingredients like cherry tomatoes, spinach, or a sprinkle of lemon zest for extra freshness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your delicious and comforting Garlic Butter Shrimp Pasta with a perfect balance of flavors!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Scallop Risotto':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Scallops</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Arborio rice</td>
                    <td>1 1/2 cups</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>White wine</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Chicken or vegetable broth</td>
                    <td>4 cups</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Shallot, finely chopped</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Butter</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Parmesan cheese, grated</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Chopped fresh parsley</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Lemon zest</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the scallops:</div>
                        <div class="ins-content-p">
                            Pat dry 1 pound of fresh scallops with paper towels. Season the scallops with salt and black pepper.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the scallops:</div>
                        <div class="ins-content-p">
                            In a large skillet, heat 2 tablespoons of olive oil over medium-high heat. Add the scallops to the skillet and sear for 2-3 minutes on each side or until they develop a golden brown crust. Remove the scallops from the skillet and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the risotto base:</div>
                        <div class="ins-content-p">
                            In the same skillet, add 1 cup of Arborio rice and sauté for 1-2 minutes until the rice becomes translucent around the edges.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Deglaze with wine:</div>
                        <div class="ins-content-p">
                            Pour in 1/2 cup of dry white wine, stirring constantly until the wine is mostly absorbed by the rice.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add chicken broth:</div>
                        <div class="ins-content-p">
                            Begin adding hot chicken broth, one ladle at a time, to the rice. Allow each addition to be absorbed before adding the next. Continue this process until the rice is creamy and cooked to al dente, which takes about 18-20 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Finish the risotto:</div>
                        <div class="ins-content-p">
                            Stir in 1/2 cup of grated Parmesan cheese and 2 tablespoons of unsalted butter until melted. Season the risotto with salt and black pepper to taste.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve with scallops:</div>
                        <div class="ins-content-p">
                            Plate the risotto and top it with the seared scallops. Optionally, garnish with chopped fresh parsley or a drizzle of balsamic reduction for added flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your exquisite Scallop Risotto, a creamy and flavorful dish with perfectly cooked scallops!
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Wine pairing:</div>
                        <div class="ins-content-p">
                            Consider serving a crisp and dry white wine, such as Sauvignon Blanc or Pinot Grigio, to complement the richness of the scallops and risotto.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    // -----------------------------------------------------------------------pork----------------------------------------------------------------------- 

    'Pork Tenderloin With Apple Cider Glaze':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork tenderloin</td>
                    <td>2 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Apple cider</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Apple cider vinegar</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Brown sugar</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Dijon mustard</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Rosemary, chopped</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Thyme, chopped</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the pork:</div>
                        <div class="ins-content-p">
                            Rub 2 pork tenderloins (about 1 pound each) with a mixture of salt, black pepper, and a pinch of dried thyme. Ensure the tenderloins are evenly coated with the seasoning.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the pork:</div>
                        <div class="ins-content-p">
                            In an oven-safe skillet, heat 2 tablespoons of vegetable oil over medium-high heat. Sear the pork tenderloins on all sides until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the glaze:</div>
                        <div class="ins-content-p">
                            In a small bowl, whisk together 1/2 cup of apple cider, 2 tablespoons of Dijon mustard, 2 tablespoons of honey, and 1 teaspoon of apple cider vinegar.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Apply the glaze:</div>
                        <div class="ins-content-p">
                            Pour the apple cider glaze over the seared pork tenderloins, ensuring they are well-coated.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roast in the oven:</div>
                        <div class="ins-content-p">
                            Transfer the skillet to the preheated oven. Roast the pork for 20-25 minutes or until the internal temperature reaches 145°F (63°C), basting with the glaze halfway through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest and slice:</div>
                        <div class="ins-content-p">
                            Remove the pork from the oven and let it rest for 5-10 minutes before slicing. This allows the juices to redistribute and keeps the pork tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Reduce the glaze:</div>
                        <div class="ins-content-p">
                            While the pork is resting, heat the remaining glaze in a small saucepan over medium heat. Simmer for a few minutes until it thickens slightly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Slice the pork tenderloin and drizzle with the reduced apple cider glaze. Serve with your favorite sides, such as roasted vegetables or mashed potatoes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your delicious Pork Tenderloin with Apple Cider Glaze, a perfect blend of savory and sweet flavors!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Pulled Pork Sandwiches':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork shoulder or butt, boneless</td>
                    <td>4-5 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Barbecue rub or seasoning</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Barbecue sauce</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Apple cider vinegar</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Worcestershire sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Brown sugar</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Onion powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Smoked paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Hamburger buns</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Coleslaw</td>
                    <td>For topping (optional)</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 325°F (163°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the pork:</div>
                        <div class="ins-content-p">
                            Rub a 4-5 pound pork shoulder or pork butt with a spice rub of your choice. Common spices include paprika, garlic powder, onion powder, cumin, and brown sugar.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the pork:</div>
                        <div class="ins-content-p">
                            In an oven-safe Dutch oven or skillet, heat 2 tablespoons of vegetable oil over medium-high heat. Sear the pork on all sides until browned.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slow cook in the oven:</div>
                        <div class="ins-content-p">
                            Add 1 cup of chicken or vegetable broth to the Dutch oven. Cover with a lid and transfer to the preheated oven. Slow cook for 3-4 hours or until the pork is fork-tender and easily pulls apart.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Shred the pork:</div>
                        <div class="ins-content-p">
                            Once cooked, use two forks to shred the pork into bite-sized pieces. Discard any excess fat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the barbecue sauce:</div>
                        <div class="ins-content-p">
                            In a saucepan, combine 1 cup of your favorite barbecue sauce, 1/4 cup of apple cider vinegar, 2 tablespoons of brown sugar, and a pinch of black pepper. Heat over medium heat until warmed through.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine and simmer:</div>
                        <div class="ins-content-p">
                            Pour the barbecue sauce over the shredded pork and mix until evenly coated. Simmer on the stove over low heat for an additional 15-20 minutes, allowing the flavors to meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Toast the buns:</div>
                        <div class="ins-content-p">
                            While the pork is simmering, toast your favorite hamburger buns in the oven or on a skillet until golden brown.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Assemble the sandwiches:</div>
                        <div class="ins-content-p">
                            Spoon the pulled pork onto the toasted buns. Optionally, top with coleslaw for a refreshing crunch.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve your delicious Pulled Pork Sandwiches with your favorite sides and enjoy a classic barbecue favorite!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Pork Chops With Dijon Cream Sauce':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork chops, bone-in or boneless</td>
                    <td>4 (about 1 inch thick)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Paprika</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Butter</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Garlic, minced</td>
                    <td>2 cloves</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Chicken broth</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Heavy cream</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Dijon mustard</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Thyme, fresh or dried</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Chopped fresh parsley</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the pork chops:</div>
                        <div class="ins-content-p">
                            Season 4 bone-in pork chops with salt and black pepper on both sides.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the pork chops:</div>
                        <div class="ins-content-p">
                            In an oven-safe skillet, heat 2 tablespoons of vegetable oil over medium-high heat. Sear the pork chops for 3-4 minutes on each side or until they develop a golden brown crust. Remove the pork chops from the skillet and set aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Make the Dijon cream sauce:</div>
                        <div class="ins-content-p">
                            In the same skillet, add 1 tablespoon of unsalted butter, 1 minced garlic clove, and 1 tablespoon of Dijon mustard. Sauté for 1-2 minutes until the garlic is fragrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Deglaze with white wine:</div>
                        <div class="ins-content-p">
                            Pour in 1/2 cup of dry white wine to deglaze the skillet, scraping up any browned bits from the bottom. Allow the wine to reduce by half.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add heavy cream:</div>
                        <div class="ins-content-p">
                            Lower the heat and stir in 1 cup of heavy cream. Simmer the sauce for 2-3 minutes until it thickens slightly.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Return pork chops to the skillet:</div>
                        <div class="ins-content-p">
                            Return the seared pork chops to the skillet, spooning some of the Dijon cream sauce over them.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Transfer the skillet to the preheated oven. Bake for 15-20 minutes or until the pork chops reach an internal temperature of 145°F (63°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Garnish and serve:</div>
                        <div class="ins-content-p">
                            Garnish the pork chops with chopped fresh parsley and serve them with the remaining Dijon cream sauce. Optionally, pair with your favorite side dishes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your delectable Pork Chops with Dijon Cream Sauce, a flavorful and creamy dish perfect for any occasion!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Carnitas (Mexican Pulled Pork)':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork shoulder or butt, cut into chunks</td>
                    <td>3-4 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Orange, juiced</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lime, juiced</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic cloves, minced</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Cumin</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Oregano</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Bay leaves</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Water</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Tortillas</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Chopped cilantro</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Diced onions</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Lime wedges</td>
                    <td>For serving</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 325°F (163°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the pork:</div>
                        <div class="ins-content-p">
                            Cut a 4-5 pound pork shoulder or pork butt into large chunks. Season the pork with salt, black pepper, cumin, oregano, and chili powder.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Sear the pork:</div>
                        <div class="ins-content-p">
                            In an oven-safe Dutch oven or skillet, heat 2 tablespoons of vegetable oil over medium-high heat. Sear the pork chunks on all sides until browned.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Add aromatics:</div>
                        <div class="ins-content-p">
                            Add 1 diced onion, 4 minced garlic cloves, and 2 bay leaves to the pot with the seared pork.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Deglaze with orange juice:</div>
                        <div class="ins-content-p">
                            Pour in 1 cup of orange juice to deglaze the pot, scraping up any browned bits from the bottom.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Braise in the oven:</div>
                        <div class="ins-content-p">
                            Cover the Dutch oven with a lid and transfer it to the preheated oven. Braise the pork for 2.5 to 3 hours or until the meat is fork-tender and easily shreds.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Shred the pork:</div>
                        <div class="ins-content-p">
                            Once cooked, use two forks to shred the pork in the Dutch oven, mixing it with the flavorful juices.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Broil for crispiness:</div>
                        <div class="ins-content-p">
                            If desired, spread the shredded pork on a baking sheet and broil for a few minutes until the edges become crispy.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve your delicious Carnitas in tacos, burritos, or over rice. Garnish with chopped fresh cilantro, diced onions, and a squeeze of lime.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your flavorful and tender Carnitas, a classic Mexican dish perfect for gatherings and celebrations!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Honey Garlic Glazed Pork Ribs':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork ribs</td>
                    <td>2 racks (about 4 pounds)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Soy sauce</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Honey</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic, minced</td>
                    <td>4 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Five-spice powder</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Sesame oil</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Green onions, chopped</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Sesame seeds</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 300°F (150°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the ribs:</div>
                        <div class="ins-content-p">
                            Place 2 racks of baby back ribs on a cutting board. Remove the membrane from the back of the ribs for more tenderness.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the ribs:</div>
                        <div class="ins-content-p">
                            Rub the ribs with a mixture of salt, black pepper, garlic powder, and paprika. Ensure both sides of the ribs are well-coated.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Wrap in foil:</div>
                        <div class="ins-content-p">
                            Individually wrap each rack of ribs tightly in aluminum foil, creating a sealed packet for baking.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Bake in the oven:</div>
                        <div class="ins-content-p">
                            Place the foil-wrapped ribs on a baking sheet and bake in the preheated oven for 2.5 to 3 hours or until the ribs are tender.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the honey garlic glaze:</div>
                        <div class="ins-content-p">
                            In a saucepan, combine 1 cup of honey, 1/2 cup of soy sauce, 4 minced garlic cloves, 1 teaspoon of grated ginger, and a pinch of red pepper flakes. Bring the mixture to a simmer, stirring occasionally.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Grill or broil the ribs:</div>
                        <div class="ins-content-p">
                            Preheat your grill or broiler. Unwrap the ribs from the foil and brush them generously with the honey garlic glaze. Grill or broil the ribs for 5-10 minutes, basting with the glaze, until they develop a caramelized crust.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest and slice:</div>
                        <div class="ins-content-p">
                            Allow the ribs to rest for a few minutes before slicing them into individual portions.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve your Honey Garlic Glazed Pork Ribs with additional glaze on the side. Garnish with chopped green onions and sesame seeds if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your delicious and sticky-sweet Honey Garlic Glazed Pork Ribs, a perfect combination of savory and sweet flavors!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Pork Stir-Fry With Vegetables':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork tenderloin, thinly sliced</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Soy sauce</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Oyster sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Hoisin sauce</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Sesame oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Vegetable oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Broccoli florets</td>
                    <td>2 cups</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Carrot, julienned</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Red bell pepper, sliced</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Snap peas, trimmed</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Cornstarch</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Water</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Green onions, chopped</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Sesame seeds</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Cooked white rice</td>
                    <td>For serving</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Slice and marinate the pork:</div>
                        <div class="ins-content-p">
                            Slice 1 pound of pork loin or pork tenderloin into thin strips. In a bowl, marinate the pork with 2 tablespoons of soy sauce, 1 tablespoon of oyster sauce, 1 tablespoon of cornstarch, and a pinch of black pepper. Let it marinate for at least 15 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the vegetables:</div>
                        <div class="ins-content-p">
                            Slice 1 bell pepper, 1 carrot, and 1 small broccoli crown into bite-sized pieces. Mince 2 cloves of garlic and grate 1 teaspoon of fresh ginger.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Stir-fry the pork:</div>
                        <div class="ins-content-p">
                            Heat 2 tablespoons of vegetable oil in a wok or large skillet over high heat. Add the marinated pork strips and stir-fry until browned and cooked through. Remove the pork from the pan and set it aside.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Cook the vegetables:</div>
                        <div class="ins-content-p">
                            In the same pan, add a bit more oil if needed. Stir-fry the minced garlic and grated ginger until fragrant. Add the sliced bell pepper, carrot, and broccoli. Cook until the vegetables are crisp-tender but still vibrant.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine and season:</div>
                        <div class="ins-content-p">
                            Return the cooked pork to the pan with the vegetables. Mix everything together. Season with additional soy sauce or oyster sauce if desired. Stir-fry for an additional 2-3 minutes to let the flavors meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve your Pork Stir-Fry with Vegetables over steamed rice or noodles. Garnish with chopped green onions or sesame seeds if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your quick and delicious Pork Stir-Fry with a colorful medley of vegetables!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Maple Glazed Pork Belly':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork belly, skin-on</td>
                    <td>2 pounds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maple syrup</td>
                    <td>1/2 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Soy sauce</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Apple cider vinegar</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Vegetable oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Sesame seeds</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Green onions, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Preheat the oven:</div>
                        <div class="ins-content-p">
                            Preheat your oven to 375°F (190°C).
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the pork belly:</div>
                        <div class="ins-content-p">
                            Pat dry a 2-pound pork belly with a paper towel. Score the skin of the pork belly with a sharp knife, creating deep cuts without cutting into the meat.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Marinate the pork:</div>
                        <div class="ins-content-p">
                            In a bowl, mix 1/4 cup of soy sauce, 2 tablespoons of maple syrup, 2 tablespoons of hoisin sauce, 1 tablespoon of rice vinegar, 1 tablespoon of grated ginger, and 2 minced garlic cloves. Rub the marinade all over the pork belly, ensuring it gets into the scored skin.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Roast the pork:</div>
                        <div class="ins-content-p">
                            Place the marinated pork belly on a rack in a roasting pan, skin side up. Roast in the preheated oven for 30 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Glaze the pork:</div>
                        <div class="ins-content-p">
                            While the pork is roasting, mix 1/4 cup of maple syrup with 1 tablespoon of soy sauce. After the initial 30 minutes of roasting, brush the pork belly with the maple syrup glaze. Repeat every 15-20 minutes until the pork is golden brown and crispy.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Rest and slice:</div>
                        <div class="ins-content-p">
                            Once the pork belly is cooked through and has a crispy skin, remove it from the oven and let it rest for 10 minutes. Slice into desired portions.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve your Maple Glazed Pork Belly with additional glaze on the side. Garnish with chopped green onions or sesame seeds if desired.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your sweet and savory Maple Glazed Pork Belly as a delicious main dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Grilled Pork Skewers':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork loin or tenderloin, cut into chunks</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Soy sauce</td>
                    <td>1/4 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Honey</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Ginger, grated</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Sesame oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Red pepper flakes</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Vegetable oil</td>
                    <td>1 tablespoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Wooden skewers, soaked in water</td>
                    <td>For skewering</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Sesame seeds</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Green onions, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the pork:</div>
                        <div class="ins-content-p">
                            Cut 1.5 pounds of pork loin or pork shoulder into bite-sized cubes. Season the pork with salt, black pepper, paprika, and a pinch of cayenne pepper for some heat. Toss the pork cubes to ensure even coating.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Marinate the pork:</div>
                        <div class="ins-content-p">
                            In a bowl, prepare the marinade by combining 1/4 cup of soy sauce, 2 tablespoons of honey, 2 tablespoons of olive oil, 2 minced garlic cloves, and 1 teaspoon of dried thyme. Add the seasoned pork cubes to the marinade, ensuring they are well-coated. Let it marinate for at least 30 minutes or refrigerate for a few hours for more flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Skewer the pork:</div>
                        <div class="ins-content-p">
                            Preheat your grill to medium-high heat. Thread the marinated pork cubes onto skewers, ensuring even spacing.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Grill the skewers:</div>
                        <div class="ins-content-p">
                            Place the skewers on the preheated grill. Grill for 10-15 minutes, turning occasionally, until the pork is cooked through and has a nice char on the edges.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare a dipping sauce:</div>
                        <div class="ins-content-p">
                            While the skewers are grilling, mix 1/4 cup of soy sauce, 2 tablespoons of rice vinegar, 1 tablespoon of honey, and a pinch of sesame seeds to create a simple dipping sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Remove the grilled pork skewers from the grill and let them rest for a few minutes. Serve the skewers with the prepared dipping sauce.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your flavorful and succulent Grilled Pork Skewers as a delicious appetizer or main dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Italian Sausage And Peppers':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Italian sausages (mild or hot)</td>
                    <td>1 pound</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bell peppers, assorted colors, sliced</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Onions, sliced</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Garlic, minced</td>
                    <td>3 cloves</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Olive oil</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Crushed tomatoes</td>
                    <td>1 can (28 ounces)</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Tomato paste</td>
                    <td>2 tablespoons</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Dried oregano</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Dried basil</td>
                    <td>1 teaspoon</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Red pepper flakes</td>
                    <td>1/2 teaspoon</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Italian bread or rolls</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Grated Parmesan cheese</td>
                    <td>For garnish</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Fresh parsley, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Cook the Italian sausage:</div>
                        <div class="ins-content-p">
                            Heat a large skillet over medium heat. Add 1 tablespoon of olive oil. Add 1 pound of Italian sausage links to the skillet. Cook the sausages, turning occasionally, until browned on all sides and cooked through. This usually takes about 15-20 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Slice the sausages:</div>
                        <div class="ins-content-p">
                            Once the sausages are cooked, transfer them to a cutting board and let them rest for a few minutes. Slice the sausages into bite-sized pieces.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the peppers and onions:</div>
                        <div class="ins-content-p">
                            In the same skillet, add 1 tablespoon of olive oil. Add 1 sliced onion and 2 sliced bell peppers (you can use a mix of colors) to the skillet. Sauté the vegetables until they are softened and slightly caramelized, about 8-10 minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Combine and season:</div>
                        <div class="ins-content-p">
                            Add the sliced Italian sausages back to the skillet with the sautéed peppers and onions. Season with salt, black pepper, dried oregano, and red pepper flakes to taste. Stir everything together to combine.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Simmer:</div>
                        <div class="ins-content-p">
                            Pour in 1 can (14 ounces) of crushed tomatoes. Stir to coat the sausage, peppers, and onions with the tomato sauce. Allow the mixture to simmer for an additional 10-15 minutes, allowing the flavors to meld.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve your delicious Italian Sausage and Peppers over cooked pasta, rice, or as a sandwich in crusty Italian bread.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your flavorful and comforting Italian Sausage and Peppers dish!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `,

    'Pork Schnitzel':
        `
        <div class="recipe-content">
        <div class="ing">
            <div class="ing-head">Ingredients:</div>
            <table class="ing-table">
                <tr>
                    <th>No.</th>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pork loin or pork chops, boneless</td>
                    <td>4 pieces</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>All-purpose flour</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Eggs</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Breadcrumbs</td>
                    <td>1 cup</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Salt</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Black pepper</td>
                    <td>To taste</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Vegetable oil</td>
                    <td>For frying</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Lemon wedges</td>
                    <td>For serving</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Fresh parsley, chopped</td>
                    <td>For garnish</td>
                </tr>
            </table>
        </div>
        </div>

        <div class="recipe-content">
        <div class="instructions">
            <div class="ing-head">Instructions: </div>
            <div class="instruction-content">
                <ol>
                    <li>
                        <div class="instruction-head">Prepare the pork:</div>
                        <div class="ins-content-p">
                            Start with 4 boneless pork chops. Place them on a cutting board and cover with plastic wrap. Pound the pork chops with a meat mallet until they are about 1/4-inch thick.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Season the pork:</div>
                        <div class="ins-content-p">
                            Season both sides of the pork chops with salt and black pepper. You can also add a pinch of paprika or garlic powder for extra flavor.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Prepare the breading station:</div>
                        <div class="ins-content-p">
                            In three separate shallow dishes, set up a breading station. Place all-purpose flour in the first dish, beaten eggs in the second dish, and breadcrumbs (seasoned with salt and pepper) in the third dish.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Coat the pork:</div>
                        <div class="ins-content-p">
                            Dredge each seasoned pork chop in the flour, shaking off any excess. Dip it into the beaten eggs, ensuring it's fully coated. Finally, coat the pork chop with breadcrumbs, pressing the breadcrumbs onto the meat to adhere.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Fry the schnitzel:</div>
                        <div class="ins-content-p">
                            Heat vegetable oil in a large skillet over medium-high heat. Carefully place the breaded pork chops in the hot oil. Fry for 3-4 minutes per side or until golden brown and crispy.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Drain and rest:</div>
                        <div class="ins-content-p">
                            Once cooked, place the pork schnitzel on a paper towel-lined plate to drain any excess oil. Let them rest for a few minutes.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Serve:</div>
                        <div class="ins-content-p">
                            Serve your Pork Schnitzel with lemon wedges on the side. Traditionally, it's accompanied by a simple salad or potato salad.
                        </div>
                    </li>
                    <li>
                        <div class="instruction-head">Enjoy:</div>
                        <div class="ins-content-p">
                            Enjoy your crispy and delicious Pork Schnitzel for a classic German-inspired meal!
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        </div>

    `

}

const recipeShowdiv = document.getElementById('recipe-show');
const backImgs = [
    'url(' + 'src/ing-1.jpg' + ')',
    'url(' + 'src/ing-2.jpg' + ')',
    'url(' + 'src/ing-3.jpg' + ')',
    'url(' + 'src/ing-4.jpg' + ')',
    'url(' + 'src/ing-5.jpg' + ')',
    'url(' + 'src/ing-6.jpg' + ')',
    'url(' + 'src/ing-7.jpg' + ')',
]

async function getRandomNumber() {
    return Math.floor(Math.random() * 7) + 1;
}

async function recipeShow() {
    let recipeButtons = document.querySelectorAll('.F-recipe');

    recipeButtons.forEach(recipeButton => {
        recipeButton.addEventListener('click', async () => {
            const recipeValueget = recipeButton.innerText;
            let randomNumber = await getRandomNumber();
            console.log(randomNumber)
            let recipeIngValue = recipeIng[recipeValueget];

            try {
                recipeShowdiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.852), rgba(0, 0, 0, 0.735)), ${backImgs[randomNumber]}`;
                recipeShowdiv.style.boxShadow = '0px 0px 30px black';
                recipeShowdiv.innerHTML = recipeIngValue;
                recipeShowdiv.scrollIntoView({ behavior: "smooth" })
            } catch (error) {
                recipeShowdiv.innerHTML = 'Some error occured, try again';
                console.log(error)
            }
        });
    });
}

function handleSubmit(event) {
    let searchInput = document.getElementById('search_input').value;
    
    if (searchInput.trim() == '') {
        event.preventDefault();
        alert(`Input cant be empty`);
    } else if (searchInput.trim() != '') { 
        event.preventDefault();
        alert('Your suggestion has been recieved, Thankyou for reaching us!');
        searchInput.innerText = '';
        window.location.reload()
    }
}
