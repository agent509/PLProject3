var person = function(){
  var data = {
    firstname:'firstname',
    lastname:'lastname',
    email:'email',
  };

  var F = function(){};
  f = new F();

  f.set = function (e,dat) {
    data[e]=data;
  }
     
  f.run = function (e) {
      return data[e];
  };

  return f;
}();

var customer = function(p){
  var data = {
    firstname:'firstname',
    lastname:'lastname',
    email:'email',
    custnum:'000',
  };

  var F = function(){};
  F.prototype = p;
  f = new F();

  f.set = function (e,dat) {
    var r = data[e];
    if(r === undefined) F.prototype.set(e,dat);
    else data[e]=dat;
  };
  f.run = function (e) {
    var r = data[e];
    if(r === undefined) return F.prototype.run(e);
    else return r;
  };

  return f;
}(person);

var employee = function(p){
  var data = {
    firstname:'firstname',
    lastname:'lastname',
    email:'email',
    ssn:'000-00-0000',
  };

  var F = function(){};
  F.prototype = p;
  f = new F();

  f.set = function (e,dat) {
    var r = data[e];
    if(r === undefined) F.prototype.set(e,dat);
    else data[e]=dat;
  };
  f.run = function (e) {
    var r = data[e];
    if(r === undefined) return F.prototype.run(e);
    else return r;
  };

  return f;
}(person);

    


$(document).ready(function() {



  $("#table").hide();
  $("#head").hide();
  $("#customer_form").hide();
  $("#employee_form").hide();
  $("[name=choice]").click(function(){
    if($("[id=customerbutton]").is(':checked')){
      $("#customer_form").show();
      $("#employee_form").hide();
    };
    if($("[id=employeebutton]").is(':checked')){
      $("#employee_form").show();
      $("#customer_form").hide();
    };
  });

  $("#submit1").click(function(){

    var isValid = true;
    if ($('#firstname1').val() === "") {
      $("#firstname_err1").text("This field is required.");
      isValid = false;
    }
    else{
      $("#firstname_err1").text("");
    }

    if ($('#lastname1').val() == "") {
      $("#lastname_err1").text("This field is required.");
      isValid = false;
    }
    else{
      $("#lastname_err1").text("");
    }

    if ($('#email1').val() == "") {
      $("#email_err1").text("This field is required.");
      isValid = false;
    }
    else{
      $("#email_err1").text("");
    }

    if ($('#num1').val() == "") {
      $("#num_err1").text("This field is required.");
      isValid = false;
    }
    else{
      $("#num_err1").text("");
    }

    if (isValid) {
    var cust = Object.create(customer);
    cust.set('firstname',$('#firstname1').val());
    cust.set('lastname',$('#lastname1').val());
    cust.set('email',$('#email1').val());
    cust.set('custnum',$('#num1').val());

    $('#table').show();
    $('#head').show();
    $('#firstname').html(cust.run('firstname'));
    $('#lastname').html(cust.run('lastname'));
    $('#email').html(cust.run('email'));
    $('#num').html(cust.run('custnum'));
    $('#numtype').html('Customer Number:');
    }
    else{
      $('#table').hide();
      $('#head').hide();
    }
  });

  $("#submit2").click(function(){
    var isValid = true;
    if ($('#firstname2').val() === "") {
      $("#firstname_err2").text("This field is required.");
      isValid = false;
    }
    else{
      $("#firstname_err2").text("");
    }

    if ($('#lastname2').val() == "") {
      $("#lastname_err2").text("This field is required.");
      isValid = false;
    }
    else{
      $("#lastname_err2").text("");
    }

    if ($('#email2').val() == "") {
      $("#email_err2").text("This field is required.");
      isValid = false;
    }
    else{
      $("#email_err2").text("");
    }

    if ($('#num2').val() == "") {
      $("#num_err2").text("This field is required.");
      isValid = false;
    }
    else{
      $("#num_err2").text("");
    }

    if (isValid) {
    var cust = Object.create(employee);
    cust.set('firstname',$('#firstname2').val());
    cust.set('lastname',$('#lastname2').val());
    cust.set('email',$('#email2').val());
    cust.set('ssn',$('#num2').val());

    $('#table').show();
    $('#head').show();
    $('#firstname').html(cust.run('firstname'));
    $('#lastname').html(cust.run('lastname'));
    $('#email').html(cust.run('email'));
    $('#num').html(cust.run('ssn'));
    $('#numtype').html('Social Security Number:');
    }
    else{
      $('#table').hide();
      $('#head').hide();
    }
  });


}); // end ready

