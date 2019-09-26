function readValidateForm(id) {
  var out = {};
  var fullid = id + " input, " + id + " select, " + id + " textarea";
  var fields = $(fullid);

  for (var index = 0; index < fields.length; index++) {
    var input = $(fields[index]);
    if (input.attr("name") == undefined) {
      console.log("[INFO] missing name for same filed");
      continue;
    }

    var rule = input.attr("rule") != undefined ? input.attr("rule") : "";
    var key = input.attr("name");
    var values = input.val();

    // valudate rule.
    if (rule.indexOf("r") != -1 && values.trim().length == 0) {
      $(this).addClass("error");
    } else {
      $(this).removeClass("error");
      return {
        out: null,
        msg: "Error: " + key + " should not be empty."
      };
    }
    // all pass set the vakue
    out[key] = values;
  }

  return {
    out: out,
    msg: ""
  };
}
//readValidateForm("#formId");
