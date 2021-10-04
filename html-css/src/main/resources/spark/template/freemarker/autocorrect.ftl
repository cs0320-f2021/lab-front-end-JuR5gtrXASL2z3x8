<#assign content>


<!-- CODE FOR TEXT BOX GOES HERE -->

  <h1 class="header-class">Autocorrect</h1>
  ${message}
  <form class="form-style" method="POST" action="/results">
    <label for="text">Enter words here: </label>
    <br>
    <textarea name="text" id="text"></textarea>
    <br>
    <input id="form-submit" type="submit">
  </form>
  ${suggestions}

</#assign>
<#include "main.ftl">
