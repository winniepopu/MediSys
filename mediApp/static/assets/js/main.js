$(function () {
    $('#r_col').css('display', 'none');
    $('#r_col').fadeIn(1000); //一開始淡入
    // $(".addIcon").click(function () {
    //     $("#addInput").append(
    //         '<div class="inline width100 newInputRow">\
    //         <div class= "newCol1 tcenter">\
    //         <input class="tcenter downLine drugs newInput2" id="" type="text" name="">\
    //                             </div>\
    //         <div class="newCol2 hcenter">\
    //             <div class="col-lg-6">\
    //                 <input type="text" class="justAnInputBox" placeholder="" />\
    //             </div>\
    //         </div>\
    //         <div class="newCol3 hcenter">\
    //             <div class="col-lg-6">\
    //                 <input type="text" class="justAnotherInputBox" placeholder="" />\
    //             </div>\
    //         </div>\
    //         <div class="newCol4 tcenter">\
    //             <input class="tcenter downLine newInput2" id="" type="text" name="">\
    //                             </div>\
    //             <div class="newCol5 tcenter">\
    //                 <input class="downLine newInput2" id="" type="text" name="">\
    //                             </div>\
    //                 <div class="newCol6 tcenter vcenter">\
    //                     <img class="modeIcon addIcon dpShadow" id="addIcon" src="assets/src/add.png"\
    //                         alt="add">\
    //                             </div>\
    //                 </div>');
    // });
    $("#searchBtn").click(function () {

    });
    $("#makeBtn").click(function () {

    });

    // comboTree1 = $('.justAnInputBox').comboTree({
    //     source: SampleJSONData,
    //     isMultiple: true
    // });
    // comboTree2 = $('.justAnotherInputBox').comboTree({
    //     source: SampleJSONData,
    //     isMultiple: false
    // });


});
function delaySet() {
    $(".delayBtn").click(function () { //use a class, since your ID gets mangled
        if ($(this).hasClass("active") == false)
            $(this).addClass("active"); //add the class to the clicked element
        else
            $(this).removeClass("active");
    });

}
function changeColor() {
    $(".mark").click(function () { //use a class, since your ID gets mangled
        if ($(this).hasClass("active") == false)
            $(this).addClass("active"); //add the class to the clicked element
        else
            $(this).removeClass("active");
    });
    var header = document.getElementById("l_col");
    if (header != null) {
        var btns = header.getElementsByClassName("l_colBtn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = header.getElementsByClassName("active");
                if (current[0] != null)
                    current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    var header1 = document.getElementById("modeChoose");
    if (header1 != null) {
        var btns1 = header1.getElementsByClassName("modeBtn");
        for (var i = 0; i < btns1.length; i++) {
            btns1[i].addEventListener("click", function () {
                var current1 = header1.getElementsByClassName("active");
                if (current1[0] != null)
                    current1[0].className = current1[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
}

function autoComplete() {
    var disease = [
        "糖尿病",
        "高血壓",
        "痛風",
        "甲狀腺機能障礙",
        "皮肌炎"
    ];
    var drug = [
        "Abatacept",
        "Abemaciclib",
        "Acyclovir",
        "Aminophylline",
        "Beractant",
        "Bisacody",
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
    // var clientList = [
    //     "王大明 / L123456789",
    //     "王大明 / A000000000",
    //     "陳小白 / B666666666",
    //     "黃春嬌 / C777777777",
    //     "Jack / P888888888"
    // ];
    $("#tags").autocomplete({
        source: disease
    });

    $(".drugs").autocomplete({
        source: drug
    });
    if (typeof (clientList) != 'undefined') {
        $("#clientNameInput").autocomplete({
            source: clientList
        });
    }
}


var SampleJSONData1 = [{
    id: 0,
    title: '早上'
}, {
    id: 1,
    title: '中午',
}, {
    id: 2,
    title: '晚上'
}, {
    id: 3,
    title: '睡前'
},];
var SampleJSONData2 = [{
    id: 0,
    title: '飯前'
}, {
    id: 1,
    title: '飯後',
}, {
    id: 2,
    title: '依情況'
},];
var comboTree1, comboTree2;

$("body").delegate('.addIcon', "click", function (e) {
    $("#addInput").append(
        `<div class="inline width100 newInputRow medi-inputDiv">
        <div class="newCol1 tcenter">
            <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" >
        </div>
        <div class="newCol1 tcenter">
            <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" >
        </div>
        <div class="newCol2 hcenter">
            <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" >
           
                
            
        </div>
        <div class="newCol3 hcenter">
            <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" >

        </div>
        <div class="newCol3 hcenter">
            <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="">

        </div>
        <div class="newCol4 tcenter">
            <input class="tcenter downLine newInput2 medi-input" id="" type="text" name="" >
        </div>
        <div class=" newCol5 tcenter">
            <input class="downLine newInput2 medi-input" id="" type="text" name="" >
        </div>
        <div class="newCol6 tcenter vcenter">
            <img class="modeIcon delIcon dpShadow" id="" src="/static/assets/src/del.png" alt="del"
                onClick="delete_row(this)">
        </div>
    </div>`);
    // $("#hide:not(.on-hide)").click(function() {
    comboTree1 = $('.justAnInputBox').comboTree({
        source: SampleJSONData1,
        isMultiple: true
    });
    comboTree2 = $('.justAnotherInputBox').comboTree({
        source: SampleJSONData2,
        isMultiple: false
    });
    autoComplete();
    $('.medi-inputDiv').css('display', 'none');
    $('.medi-inputDiv').fadeIn(1000); //一開始淡入
});


// jQuery(document).ready(function ($) {


// });
function delay() {

}
function addPost(id) {

    var patientID = $("#patientID").text();
    var symptom = $("#tags").val();
    var days = $("#day").val();
    var CreateDate = $("#date").val();
    var TakeDate = $("#date2").val();
    var times = $("#times").val();
    var avaTimes = $("#avaTimes").val();
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
        'CreateDate': CreateDate,
        'TakeMedDate': TakeDate,
        'Times': times,
        'AvaTimes': avaTimes,
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

function addUser(id) {

    var patientID = $("#newUserID").val();
    var newUserName = $("#newUserName").val();
    var newUserBirth = $("#newUserBirth").val();
    var newUserSex = $('input:radio:checked[name="gender"]').val()
    var newUserTel = $("#newUserTel").val();
    var newUserCel = $("#newUserCel").val();
    var newUserAddr = $("#newUserAddr").val();
    var newUserMail = $("#newUserMail").val();


    // var formData = new FormData($('#form1')[0]);

    data = {
        'cardID': patientID,
        'Name': newUserName,
        'Birth': newUserBirth,
        'Sex': newUserSex,
        'Tel': newUserTel,
        'Cel': newUserCel,
        'Address': newUserAddr,
        'Mail': newUserMail
    }

    console.log(data)
    $.ajax({
        url: "/addUser/",
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


function findDrug() {
    var disease = $("#tags").val()
    $.ajax({
        url: "/findMed/",
        type: "POST",
        data: {
            'disease': disease
        },
        success: function (result) {
            alert(result["message"])
            console.log(result["message"])
            if (result["status"] == "success") {

                var html = ''
                for (medi of result["message"]) {
                    var element = `  <div class="inline width100 newInputRow medi-inputDiv">
                            <div class="newCol1 tcenter">
                                <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" value=${medi[0]}>
                            </div>
                            <div class="newCol1 tcenter">
                                <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" value=${medi[1]}>
                            </div>
                            <div class="newCol2 hcenter">
                                <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" value=${medi[2]}>
                               
                                    
                                
                            </div>
                            <div class="newCol3 hcenter">
                                <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" value=${medi[3]}>

                            </div>
                            <div class="newCol3 hcenter">
                                <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text" name="" value=${medi[4]}>

                            </div>
                            <div class="newCol4 tcenter">
                                <input class="tcenter downLine newInput2 medi-input" id="" type="text" name="" value="${medi[5]}">
                            </div>
                            <div class=" newCol5 tcenter">
                                <input class="downLine newInput2 medi-input" id="" type="text" name="" value="${medi[6]}">
                            </div>
                            <div class="newCol6 tcenter vcenter">
                                <img class="modeIcon delIcon dpShadow" id="" src="/static/assets/src/del.png" alt="del"
                                    onClick="delete_row(this)">
                            </div>
                        </div>`
                    html += element
                }
                $("#addInput").append(html)

                comboTree1 = $('.justAnInputBox').comboTree({
                    source: SampleJSONData1,
                    isMultiple: true
                });
                comboTree2 = $('.justAnotherInputBox').comboTree({
                    source: SampleJSONData2,
                    isMultiple: false
                });
                // if (result['message'])
                // // window.location.reload()
                // // console.log(result)
                // {
                //     alert(result["message"])
                //     // window.location.reload();
                // }
            }


            //         if (result["status"] == "success") {

            //             var html = ''
            //             for (medi of result["message"]) {
            //                 var element = `<div class="inline width100 newInputRow medi-inputDiv">
            //     <div class="newCol1 tcenter ">
            //         <input class="tcenter downLine drugs newInput2 medi-input" id="" type="text"
            //             name="" value=${medi[0]}>
            //     </div>
            //     <div class="newCol2 hcenter">
            //         <div class="col-lg-6">
            //             <input type="text" class="justAnInputBox medi-input" placeholder="" value=${medi[1]}/>
            //         </div>
            //     </div>
            //     <div class="newCol3 hcenter">
            //         <div class="col-lg-6">
            //             <input type="text" class="justAnotherInputBox medi-input" placeholder="" value=${medi[2]}/>
            //         </div>
            //     </div>
            //     <div class="newCol4 tcenter">
            //         <input class="tcenter downLine newInput2 medi-input" id="" type="text" name="" value=${medi[3]}>
            //     </div>
            //     <div class="newCol5 tcenter">
            //         <input class="downLine newInput2 medi-input" id="" type="text" name="">
            //     </div>
            //     <div class="newCol6 tcenter vcenter">
            //         <img class="modeIcon delIcon dpShadow" id="" 
            //             src="/static/assets/src/del.png" alt="del" onClick="delete_row(this)">
            //     </div>
            // </div>`
            //                 html += element
            //             }
            //             $("#addInput").html(html)

            //             comboTree1 = $('.justAnInputBox').comboTree({
            //                 source: SampleJSONData1,
            //                 isMultiple: true
            //             });
            //             comboTree2 = $('.justAnotherInputBox').comboTree({
            //                 source: SampleJSONData2,
            //                 isMultiple: false
            //             });
            //             // if (result['message'])
            //             // // window.location.reload()
            //             // // console.log(result)
            //             // {
            //             //     alert(result["message"])
            //             //     // window.location.reload();
            //             // }
            //         }

        }
    });
}


// var inputs = document.querySelectorAll('.disease');
// Array.prototype.forEach.call(inputs, function (input) {
//     // var label = input.nextElementSibling,
//     //     labelVal = label.innerHTML;
//     input.addEventListener('change', function (e) {
//         var disease = $(".disease").val()
//         $.ajax({
//             url: "/findMed/",
//             type: "POST",
//             data: {
//                 'disease': disease
//             },
//             success: function (result) {
//                 if (result['message'] == "WOW")
//                 // window.location.reload()
//                 // console.log(result)
//                 {

//                     alert(result["message"])
//                     // window.location.reload();
//                 }

//             }
//         });

//     });
// });



// $("#record_list").DataTable({
//     "dom": '<l<t>>'
//     // "dom": '<<t>ip>',
//     // "order": [
//     //     [1, "asc"]
//     // ],
//     // "columnDefs": [{
//     //     "targets": [0, 6], //哪些欄位不用排序功能
//     //     "orderable": false
//     // }]
// });

// $("#search_list").DataTable({
//     "dom": 'frtlip',
//     "order": [
//         [0, "desc"]
//     ],
//     // "dom": '<l<t>>'
//     // "dom": '<<t>ip>',
//     // "order": [
//     //     [1, "asc"]
//     // ],
//     // "columnDefs": [{
//     //     "targets": [0, 6], //哪些欄位不用排序功能
//     //     "orderable": false
//     // }]
// });


function gotoPost(postID) {
    var nextpage_url = "/post/" + postID + "/"
    window.location.replace(nextpage_url)
}

function gotoRecord(cardID) {
    var nextpage_url = "/record/" + cardID + "/"
    window.location.replace(nextpage_url)
}

function gotoSearch() {
    var nextpage_url = "/search/"
    window.location.replace(nextpage_url)
}

function gotoSickChoose(cardID) {
    var nextpage_url = "/sickChoose/" + cardID + "/"
    window.location.replace(nextpage_url)
}

function gotoNewPage(cardID) {
    var nextpage_url = "/new/" + cardID + "/"
    window.location.replace(nextpage_url)
}

function gotoModePage() {
    var clientName = $("#clientNameInput").val();
    var cardID = clientName.split(" / ");

    gotoNewPage(cardID[0])
    // var nextpage_url = "/mode/" + cardID[0]
    // window.location.replace(nextpage_url)
}
function index(index, target) {
    $(index).click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(target).offset().top - 70
        }, 1000);
    });
}
function makeDataTable() {
    $("#myDatatable").DataTable({
        searching: true, //關閉filter功能
        columnDefs: [{
            targets: [3],
            orderable: true,
            "className": "dt-center",
            "targets": "_all",
        }]
    });

}
$("#searchDiv input").keypress(function (e) {
    code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        gotoNewPage()
    }
});

function delete_row(e) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}
$('.clientNameInput').keypress(function (e) {
    var key = window.event ? e.keyCode : e.which;
    if (key == 13)
        $('#clientNameBtn').click();
});

$(document).ready(function () {
    $('#clientNameInput').focus();
    comboTree1 = $('.justAnInputBox').comboTree({
        source: SampleJSONData1,
        isMultiple: true
    });
    comboTree2 = $('.justAnotherInputBox').comboTree({
        source: SampleJSONData2,
        isMultiple: false
    });

    autoComplete();
    makeDataTable();
    changeColor();
    delaySet();
    var table = $('#myDatatable').DataTable();
    var remind_index = "需要提醒 " + table.rows().count();
    document.getElementById("num_remind").innerHTML = table.rows().count();
    document.getElementById("remind_index").innerHTML = remind_index;
    index("#process_index", "#process");
    index("#remind_index", "#need_remind");
    index("#recent_index", "#recent_taking");
    index("#prepare_index", "#prepare_drug");
});

$('#clientNameInput').keypress(function (e) {
    if (e.which == 13) {
        $('#clientNameBtn').focus().click();
    }
});
if (document.getElementById('date') != null) {
    document.getElementById('date').valueAsDate = new Date();
}

if (document.getElementById('date2') != null) {
    var dateTime = new Date();
    dateTime = dateTime.setDate(dateTime.getDate() + 28);
    dateTime = new Date(dateTime);
    document.getElementById('date2').valueAsDate = dateTime;

}



$('#tags').keypress(function (e) {
    var key = window.event ? e.keyCode : e.which;
    if (key == 13)
        $('#sickBtn').click();
});

// 按下右上角多登出按鈕

