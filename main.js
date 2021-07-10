array_names_of_people = [];

function submit(){
    var guest_name = document.getElementById("guest_names").value;
    array_names_of_people.push(guest_name);
    console.log(array_names_of_people);
    console.log(guest_name);
    var length_of_the_array = array_names_of_people.length;
    console.log(length_of_the_array);
    document.getElementById("names").innerHTML = array_names_of_people;
}

function show(){
    var s = document.getElementById("names").value;
    var found = 0;
    var j;
    for (j= 0; j < array_names_of_people.length; j++) {
        if (s == array_names_of_people[j]) {
            found = found + 1;
        }
        
    }
    document.getElementById("name_placeholder").innerHTML = "name found" + found + "time/s";
    console.log("name found" + found + "time/s");
}