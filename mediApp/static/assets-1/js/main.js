var med_counter = 1
$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
    $(".addIcon").click(function () {
        med_counter += 1;
        console.log("YES");

        $("#medList").append(`<tr class="medi-inputDiv" id="${med_counter}">
        <td>
            <input class="tcenter medi-input newInput" type="text" name="" value=""
                required="required">
        </td>

        <td><select class="form-control medi-input" id="TIME">
                <option value="早">早</option>
                <option value="中">中</option>
                <option value="晚">晚</option>
            </select></td>
        <td><input class="tcenter medi-input newInput" id="" type="text" name="" value=""
                required="required"></td>
        <td> <input class="medi-input newInput" id="" type="text" name="" value="">
        </td>
        <td>
            <img class="modeIcon addIcon" id="addIcon"
                src="{% static '/assets/src/add.png' %}" alt="add">
        </td>
    </tr>`);
        //     $("#form1").append(`<div class="inline medi-inputDiv" id="med_${med_counter}">
        //     <div class="newCol1 tcenter">
        //         <input class="tcenter medi-input" type="text" name="" value="" required="required">
        //     </div>
        //     <div class="newCol2 tcenter">
        //         <select class="form-control medi-input" id="TIME">
        //             <option value="早">早</option>
        //             <option value="中">中</option>
        //             <option value="晚">晚</option>
        //         </select>
        //     </div>
        //     <div class="newCol3 tcenter">
        //         <input class="tcenter medi-input" id="" type="text" name="" value=""
        //             required="required">
        //     </div>
        //     <div class="newCol4 tcenter">
        //         <input class="medi-input" id="" type="text" name="" value="">
        //     </div>
        //     <div class="newCol5 tcenter vcenter">
        //         <img class="modeIcon addIcon" id="addIcon" src="{% static '/assets/src/add.png' %}"
        //             alt="add">
        //     </div>
        // </div>


        //    `);
    });
});


function addPost(id) {

    var patientID = $("#patient").val()[0];
    var symptom = $("#symptom").val();
    var days = $("#day").val()[0];
    // var formData = new FormData($('#form1')[0]);

    var med_Array = []
    $(".medi-inputDiv").each(function (index, item) {
        var med_Cell = []
        $(item).find('.medi-input').each(function (index, input_item) {
            med_Cell.push($(input_item).val())
        });
        med_Array.push(med_Cell)

    })

    data = {
        'patientID': patientID,
        'sym': symptom,
        'days': days,
        'medData': med_Array
    }

    console.log(data)
    $.ajax({
        url: "/addPost/",
        type: "POST",
        data: data,
        success: function (result) {
            if (result)
            // window.location.reload()
            // console.log(result)
            {
                alert(result["message"])
                window.location.reload();
            }

        }
    });

}