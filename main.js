const d = new Date()
var create_date = new Intl.DateTimeFormat('fa-IR').format(d);
var section_register = document.getElementById("section_register");
var persons_true = [];
var persons_false = [];
var end = document.getElementById("print");
var send = document.getElementById("send");
var page_reload = document.getElementById("page_reload");
var teacher_name = null,
    class_name = null,
    number_of_students = null,
    file_name = null;
var btn_register = document.getElementById("btn_register");
var section_show_form = document.getElementById("section_show_form");
var btn_create_form = document.getElementById("btn_create_form");
var section_create_form = document.getElementById("section_create_form");
var form_title = document.getElementById("form_title");
var persons = [];
var section_show_form = document.getElementById("section_show_form");
var form_titlee = document.getElementById("form_titlee");
var btn_show_form = document.getElementById("btn_show_form");
var form = document.getElementById("form");
// ---------------------------------------------------------------------------------------

gsap.from("#section_register", {
    opacity: 0,
    x: 100,
    duration: 1
});

gsap.from("#section_create_form", {
    opacity: 0,
    x: 100,
    duration: 1
});


btn_register.addEventListener("click", function () {
    teacher_name = document.getElementById("teacher_name").value;
    teacher_name.trim();
    class_name = document.getElementById("class_name").value;
    class_name.trim();
    number_of_students = document.getElementById("number_of_students").value;
    number_of_students.trim();
    file_name = document.getElementById("file_name").value;
    file_name.trim();
    if (teacher_name === "") {
        Swal.fire({
            icon: 'error',
            title: 'خطا!!!',
            text: 'فیلد نام دبیر نمی تواند خالی باشد',
            confirmButtonText: 'بازگشت',
        })
    } else if (class_name === "") {
        Swal.fire({
            icon: 'error',
            title: 'خطا!!!',
            text: 'فیلد نام کلاس نمی تواند خالی باشد',
            confirmButtonText: 'بازگشت',
        })
    } else if (number_of_students === "") {

        Swal.fire({
            icon: 'error',
            title: 'خطا!!!',
            text: 'فیلد تعداد هنرجویان نمی تواند خالی باشد',
            confirmButtonText: 'بازگشت',
        })
    } else if (number_of_students === "0") {

        Swal.fire({
            icon: 'error',
            title: 'خطا!!!',
            text: 'فیلد تعداد هنرجویان نمی تواند 0 باشد',
            confirmButtonText: 'بازگشت',
        })
    } else if (file_name === "") {
        Swal.fire({
            icon: 'error',
            title: 'خطا!!!',
            text: 'فیلد نام فایل  نمی تواند خالی باشد',
            confirmButtonText: 'بازگشت',
        })
    } else {
        teacher_name = document.getElementById("teacher_name").value;
        class_name = document.getElementById("class_name").value;
        number_of_students = document.getElementById("number_of_students").value;
        file_name = document.getElementById("file_name").value;
        section_register.style.display = "none";
        form_title.innerHTML = "ایجاد فرم حضور غیاب کلاس : " + class_name;
        section_create_form.style.display = "flex";
        number_of_students = parseInt(number_of_students);
        var inputa = number_of_students + 1;
        for (var i = 1; i < inputa; i++) {
            var person_div = document.createElement("div");
            person_div.classList.add(
                "mt-2",
                "w-9/12",
                "h-16",
                "flex",
                "justify-between",
                "items-center",
                "box-border",
                "p-2",
                "md:flex-row",
                "flex-col",
            );
            var person_input_name = document.createElement("input");
            person_input_name.classList.add(
                "md:w-10/12",
                "w-full",
                "h-5/6",
                "box-border",
                "p-2",
                "border-0",
                "outline-none",
                "rounded-sm",
                "bg-slate-300",
                "text-center",
            );
            person_input_name.id = "person" + i;
            var person_label_for_input = document.createElement("label");
            person_label_for_input.innerHTML = "هنرجوی " + i + " : ";
            person_div.appendChild(person_label_for_input);
            person_div.appendChild(person_input_name);
            section_create_form.insertBefore(person_div, btn_create_form);
        }
    }
});

btn_create_form.addEventListener("click", function () {
    var inputa = number_of_students + 1;
    var person_name = null;
    var starus = null;
    for (var i = 1; i < inputa; i++) {
        var IdName = "person" + i;
        var IdName2 = "هنرجوی" + i;
        person_name = document.getElementById(IdName).value;
        person_name.trim();
        if (person_name == "") {
            Swal.fire({
                icon: 'error',
                title: 'خطا!!!',
                text: " فیلد نام " + IdName2 + " نمی تواند خالی باشد  ",
                confirmButtonText: 'بازگشت',
            });
            starus = false;
            persons  = [];
            break;
        } else {
            persons.push(person_name);
            starus = true;
        }
    }
    if (starus) {
        section_create_form.style.display = "none",
            form_titlee.innerHTML = " فرم حضور غیاب کلاس : " + class_name;
        section_show_form.style.display = "flex";

        for (var i = 0; i < persons.length; i++) {

            var person_div = document.createElement("div");
            person_div.classList.add(
                "mt-2",
                "w-full",
                "h-16",
                "flex",
                "md:flex-row",
                "flex-col",
                "justify-between",
                "items-center",
                "box-border",
                "p-2",
                "border-b",
                "border-gray-300"
            );
            var IdName = "person" + i;
            var div_true = document.createElement("div");
            div_true.classList.add(
                "box-border",
                "p-2",
                "w-20",
                "h-5",

                "flex",
                "justify-around",
                "items-center",
            );
            var person_lable_name_one = document.createElement("input");
            person_lable_name_one.type = "radio";
            person_lable_name_one.name = IdName;
            person_lable_name_one.value = true;
            var person_label_for_name = document.createElement("label");
            person_label_for_name.innerHTML = "حاضر";
            div_true.appendChild(person_lable_name_one);
            div_true.appendChild(person_label_for_name);


            var div_false = document.createElement("div");
            div_false.classList.add(
                "box-border",
                "p-2",
                "w-20",
                "h-5",

                "flex",
                "justify-around",
                "items-center",
            );
            var person_lable_name_tow = document.createElement("input");
            person_lable_name_tow.type = "radio";
            person_lable_name_tow.name = IdName;
            person_lable_name_tow.value = false;
            var person_label_for_name2 = document.createElement("label");
            person_label_for_name2.innerHTML = "غایب";
            div_false.appendChild(person_lable_name_tow);
            div_false.appendChild(person_label_for_name2);

            var radio_div = document.createElement("div");
            radio_div.classList.add(
                "md:w-3/12",
                "flex",
                "justify-around",
                "items-center",
                "w-6/12",

            );
            var person_label_for_input = document.createElement("label");
            person_label_for_input.innerHTML = persons[i] + " : ";
            person_div.appendChild(person_label_for_input);
            radio_div.appendChild(div_true);
            radio_div.appendChild(div_false);
            person_div.appendChild(radio_div);
            form.appendChild(person_div);
        }
    }
});

page_reload.addEventListener("click", function () {
    location.reload();
});
btn_show_form.addEventListener("click", function () {
    var sta = null;
    var person_name23 = null;
    for (var i = 0; i < persons.length; i++) {
        var IdName = "person" + i;
    
        person_name23 = document.forms["student"][IdName];
        // console.log(person_name23);
        // console.log(person_name23.checked);
        if(person_name23.value == ""){
            Swal.fire({
                icon: 'error',
                title: 'خطا!!!',
                text: "  وضعیت حاضر یا غائب بودن   " + persons[i] + " نمی تواند خالی باشد  ",
                confirmButtonText: 'بازگشت',
            });
            sta = false;
            persons_false = [];
            persons_true = [];
            break;
        }else {
            if (person_name23.value == "true") {
                sta = true;
                persons_true.push(persons[i]);
            } else if (person_name23.value == "false") {
                sta = true;
                persons_false.push(persons[i]);
            }
        }
    }
    if (sta) {
        document.getElementById("date_create").innerHTML = create_date;
    document.getElementById("time_create_1").innerHTML = d.getMinutes();
    document.getElementById("time_create_2").innerHTML = d.getHours();
    document.getElementById("class").innerHTML = class_name;
    document.getElementById("teacher").innerHTML = teacher_name;
    var ptrue = document.getElementById("ptrue");
    for (var i = 0; i < persons_true.length; i++) {
        var span = document.createElement("span");
        span.classList.add(
            "w-full",
            "h-8",
            "text-right",
            "border-b",
            "border-gray-700",
            "leading-8",
            "box-border",
            "pr-2",
        );
        span.innerHTML = persons_true[i];
        ptrue.append(span);
    }
    var pfalse = document.getElementById("pfalse");
    for (var i = 0; i < persons_false.length; i++) {
        var span = document.createElement("span");
        span.classList.add(
            "w-full",
            "h-8",
            "text-right",
            "border-b",
            "border-gray-700",
            "leading-8",
            "box-border",
            "pr-2",
        );
        span.innerHTML = persons_false[i];
        pfalse.append(span);
    }
    section_show_form.style.display = "none";

    document.getElementById("allperson").innerHTML = persons.length;
    document.getElementById("tperson").innerHTML = persons_true.length;
    document.getElementById("fperson").innerHTML = persons_false.length;
    end.style.display = "flex";
    send.style.display = "block";
    page_reload.style.display = "block";
    }
});


send.addEventListener("click", function () {
    var element = document.getElementById('print');
    var attributes = {
        filename: file_name + ".pdf",
        jsPDF: {
            unit: 'in',
            format: 'A4',
            orientation: 'portrait'
        }
    };
    html2pdf().set(attributes).from(element).save();

});