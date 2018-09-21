const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    <div>
      <label for="author name" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="author" name="author" type="text" class="form-control" />
      </div>
    </div>
    <div>
      <div>
        <label for="email adress" class="col-sm-2 control-label">email Adress</label>
        <div class="col-sm-10">
          <input id="email" name="email" type="text" class="form-control" />
        </div>
      </div>
    </div>
  
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control" />
      </div>
    </div>
    <div>
      <div>
        <label for="textarea" class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-10">
          <input id="textarea" name="textarea" type="text" class="form-control" />
        </div>
      </div>
    </div>
    <div>
      <div>
        <label for="page status" class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-10">
          <input id="page status" name="page status" type="text" class="form-control" />
        </div>
      </div>
    </div>
  
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);
