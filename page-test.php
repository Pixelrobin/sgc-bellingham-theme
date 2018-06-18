<?php get_header(); ?>

<div style="padding: 2rem;">
	<h1>Heading One</h1>
	<h2>Heading Two</h2>
	<h3>Heading Three</h3>

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien non nisi dictum gravida sit amet eu mauris. Nam eu est ornare, mattis nulla et, tincidunt sem. Maecenas maximus ante magna, sed cursus turpis volutpat ac. Duis dictum mattis turpis non posuere. Maecenas a lectus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla feugiat purus lectus, ac dapibus felis varius vitae. Maecenas sit amet pellentesque dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a felis vitae nisi accumsan auctor id condimentum nisl. Phasellus mollis pretium enim at interdum.</p>

	<button>Button</button>
	<a class="button" href="#">Anchor button</a>
	<button class = "button--blue">Blue button</button>

	<div style="background-color: black; width: 100%; padding: 5rem; text-align: center; margin-bottom: 1rem;">
		<button class="button--white">White button</button>
		<button class="button--ghost">Ghost button</button>
	</div>

	<form>
		<label>
			Text Input:
			<input type="text" placeholder="Some text here"></text>
		</label>

		<label for="email">Your email:</label>
		<input type="email" placeholder="john@mail.com" id="email"></input>

		<textarea></textarea>

		<select>
			<option>Select me</option>
			<option>No, me!</option>
			<option> Wait, no, me!</option>
		</select>

		<input type="button" value="Form Button">
		<input type="submit" value="Submit Button">
	</form>

	<ul>
		<li>Unordered list item 1</li>
		<li>List item 2</li>
		<li>The third list item</li>
	</ul>

	<ol>
		<li>List item one</li>
		<li>List item two</li>
		<li>List item three</li>
	</ol>
</div>

<?php get_footer(); ?>