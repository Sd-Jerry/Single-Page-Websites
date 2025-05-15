<section id="s-container" role="main">
            <div class="top-decoration" aria-hidden="true">
                <span class="long"></span>
                <span class="short"></span>
                <span class="short"></span>
            </div>
            <p class="s-subtitle">Our Services</p>
            <h2 class="s-head">Why Choose Us</h2>
            <div class="grid">
                <div class="item">
                    <div class="icon-circle" aria-hidden="true">
                        <i class="fa-solid fa-file-prescription"></i>
                    </div>
                    <h3>Prescription Filling</h3>
                    <p>
                        When filling prescriptions, we go above and beyond to ensure that the medication prescribed is
                        the
                        most suitable option for each patient. Every prescription is carefully reviewed for potential
                        drug
                        interactions and side effects before it's dispensed. Our experienced pharmacists also provide
                        personalized counseling to ensure patients fully understand their medication. Additionally, we
                        offer
                        blister packing services for patients with caretakers or those living in assisted or long-term
                        care
                        facilities, making it easier for them to manage their medications.
                    </p>
                </div>
                <div class="item">
                    <div class="icon-circle" aria-hidden="true">
                        <i class="fa-brands fa-nutritionix"></i>
                    </div>
                    <h3>Nutritional Support</h3>
                    <p>
                        Many health conditions and prescription medications can lead to deficiencies in essential
                        vitamins
                        and nutrients. At Levin's Pharmacy, our expert clinical nutritionist is available to help
                        identify
                        any deficiencies and provide tailored recommendations to address them. We also support patients
                        who
                        prefer a more holistic approach to their health by offering a full range of high-quality
                        vitamins
                        and supplements, including brands like Pure Encapsulations®️ , Jarrow®️ , Life Extension®️ , and
                        Thorne®️ .
                    </p>
                </div>
                <div class="item">
                    <div class="icon-circle" aria-hidden="true">
                        <i class="fa-solid fa-prescription-bottle-medical"></i>
                    </div>
                    <h3>Non-Prescription Items</h3>
                    <p>
                        Levin's Pharmacy offers a wide selection of over-the-counter medications, skincare products,
                        greeting cards, toys, gifts, and various house ware items to meet all your everyday needs. We
                        also carry an extensive range of surgical supplies and durable medical equipment, including canes,
                        walkers, wheelchairs, nebulizers, and more.
                    </p>
                </div>
                <div class="item">
                    <div class="icon-circle" aria-hidden="true">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <h3>Prior Authorization Support</h3>
                    <p>
                        At Levin's Pharmacy, we understand that sometimes the best medication for a patient may not be
                        covered by their insurance or may require a "prior authorization" from the insurance company. We
                        work closely with both doctors and insurance providers to streamline the process and ensure our
                        patients receive the medications they need as quickly as possible.
                    </p>
                </div>
                <div class="item">
                    <div class="icon-circle" aria-hidden="true">
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <h3>Fast, Free Delivery</h3>
                    <p>
                        At Levin's Pharmacy, we understand that our patients lead busy lives and some may have
                        difficulty getting around. That's why we offer fast, free delivery Monday through Saturday to make it more
                        convenient for you. For those who prefer to pick up their prescriptions in person, we provide ample
                        parking and offer curbside service for added ease and convenience.
                    </p>
                </div>
                <div class="item">
                    <div class="icon-circle" aria-hidden="true">
                        <i class="fa-solid fa-comments-dollar"></i>
                    </div>
                    <h3>Saving Our Patients Money</h3>
                    <p>
                        At Levin's Pharmacy, we understand that healthcare costs continue to rise, and we are committed
                        to helping our patients save money. We offer competitive prices on both brand-name and generic
                        medications, and we price-match many of our local competitors. To further help our patients save, we
                        automatically apply all available manufacturer discounts and rebates to prescription copay, ensuring you get the best possible price.
                    </p>
                </div>
            </div>
</section>
        
        #s-container {
    background: white;
    color: black;
    text-align: center;
    max-width: 1200px;
    margin: 32px auto;
    /* border: 8px solid #9ca3af; */
    border: 8px solid #6ca7fe;
    padding: 32px;
    box-sizing: border-box;
}

.top-decoration {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
}

.top-decoration span {
    display: inline-block;
    height: 4px;
    border-radius: 9999px;
    background-color: #2563eb;
}

.top-decoration .long {
    width: 64px;
}

.top-decoration .short {
    width: 32px;
}

.s-subtitle {
    font-size: 20px;
    margin-bottom: 16px;
    font-family: 'Rubik', sans-serif;
}

.s-head {
    font-weight: 700;
    font-size: 24px;
    margin: 0 0 40px 0;
    font-family: 'Quicksand', sans-serif;
}

.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px 64px;
    max-width: 900px;
    margin: 0 auto;
}

.item {
    flex: 1 1 280px;
    max-width: 416px;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.item:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.icon-circle {
    width: 64px;
    height: 64px;
    margin: 0 auto 16px auto;
    border-radius: 50%;
    background-color: #2563eb;
    border: 2px solid #93c5fd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
}

.item h3 {
    font-weight: 700;
    font-size: 18px;
    margin: 0 0 12px 0;
    font-family: 'Quicksand', sans-serif;
}

.item p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    margin: 0 auto;
    padding: 15px;
    max-width: 100%;
    font-family: 'Rubik', sans-serif;
}