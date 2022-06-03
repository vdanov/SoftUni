import { html } from '../lib.js'

const listingByYearTemplate = () => html`<section id="car-listings">
<h1>Car Listings by Year</h1>
<div class="listings">

    <!-- Display all records -->
    <div class="listing">
        <div class="preview">
            <img src="/images/audia3.jpg">
        </div>
        <h2>Audi A3</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: 2018</h3>
                <h3>Price: 25000 $</h3>
            </div>
            <div class="data-buttons">
                <a href="#" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

export function listingByYearPage(ctx) {
    ctx.render(listingByYearTemplate());
}