const arrayTest = [1, 2, 3, 3, 2, 1, 4].join(", ");

document.getElementById("app").innerHTML = `
  <div class="container">
    <div class="header">
      <h1>Unique Element Challenge</h1>
      <img src="src/assets/logo-ancert.svg" />
    </div>

    <main>
      <section class="section1">
        <h2 class="subtitle">Target</h2>
        <div class="text">Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>

        <h2 class="subtitle">Considerations</h2>
        <ul>
          <li>Values are <b>duplicated only twice</b>.</li>
          <li>There is <b>only one non duplicate value</b>.</li>
          <li>The non duplicate value can be placed <b>anywhere on the array</b>.</li>
          <li>The result must be <b>an integer</b>.</li>
        </ul>
      </section>
      
      <section class="section2">
        <div class="test-data">
          <h2>Test Data</h2>
          <div class="array-numbers">${arrayTest}</div>
        </div>

        <div class="expected-result">
          <h2><span>Expected</span> <span>result</span></h2>
          <div class="result-number">4</div>
        </div>

        <div class="result">
          <h2>Your Result</h2>
          <div class="result-number">4</div>
        </div>
      </section>
    </main>
  </div>
`;