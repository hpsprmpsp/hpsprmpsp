var form = document.getElementById("rawForm");
var textArea = document.getElementById("rawJson");
var opArea = document.getElementById("divFormatted");
form.addEventListener('submit', function (e) {
    // e.stopPropagation();
    e.preventDefault();
    formatJSON();
    $("#rawInputdiv").collapse('hide');
    $('#rawOutputDiv').collapse('show');
});
// updating expand and collapse icon

$('section div.collapse').on('shown.bs.collapse', (e) => {
    let parent =  $(e.target).parent();
    parent.find('i').removeClass('fa-plus-square').addClass('fa-minus-square');
    parent.removeClass('padding-0').addClass('padding-bottom-7');
    //parent.find('.section-header').removeClass('margin-bottom-0').addClass('margin-bottom-20');
});
$('section div.collapse').on('show.bs.collapse', (e) => {
    $(e.target).parent().find('.section-header').removeClass('margin-bottom-0').addClass('margin-bottom-20');
});
$('section div.collapse').on('hidden.bs.collapse', (e) => {
    let parent =  $(e.target).parent();
    parent.find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
    parent.removeClass('padding-bottom-7').addClass('padding-0');
    parent.find('.section-header').removeClass('margin-bottom-20').addClass('margin-bottom-0');
});

function formatJSON() {
    let data = textArea.value;
    data = data.replace(/\r?\n|\r/g, "").trim();
    data = data.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');;
    if (data === null || data.length === 0) {
        return false;
    }
    try {
        let obj = JSON.parse(data);
        opArea.innerHTML = "";
        populateWithTable(obj, opArea);
        $('#errorBox').html("");
    } catch (e) {
        showMessage("Error",e, 'error');
    } finally {

    }

}


/* type, text, cssClass, cssStyle, parent
    @purpose: create an html element and append it to a parent or return the element
    @params: an object as below
            {
                type: <element type>,
                text: <text to be set>,
                elem: <HTML element>,
                cssClass: <css classes separated by comma(,)>
                cssStyle: <either a string or object>,
                parent: <HTML element>
            }
*/
function createElement(elementDataObj) {
    if (elementDataObj.constructor.name !== 'Object') {
        console.error("Invalid element data");
        return false;
    }
    let el = document.createElement(elementDataObj.type);
    if (elementDataObj.text) {
        let tn = document.createTextNode(elementDataObj.text);
        el.appendChild(tn);
    }
    if (elementDataObj.elem) {
        el.appendChild(elementDataObj.elem);
    }
    if (elementDataObj.cssClass) {
        let classes = elementDataObj.cssClass.trim().split(",");
        classes.forEach(cls => {
            if(cls){
                el.classList.add(cls);
            }
            
        });
    }

    if (elementDataObj.cssStyle) {
        if (typeof (elementDataObj.cssStyle) === 'string') {
            el.setAttribute('style', elementDataObj.cssStyle);
        } else if (elementDataObj.cssStyle.constructor.name === 'object') {
            let sle = JSON.stringify(elementDataObj.cssStyle);
            el.setAttribute('style', sle);
        } else {
            console.warn("Invalid CSS style was provided, skipping it.");
        }
    }

    if (elementDataObj.attr) {
        Object.keys(elementDataObj.attr).forEach(key => {
            el.setAttribute(key,elementDataObj.attr[key]);
        });
    }

    if (elementDataObj.parent) {
        elementDataObj.parent.appendChild(el);
    } else {
        return el;
    }
}

function populateWithTable(obj, parent, data) {
    if (!isThere(obj)) {
        createElement({
            type: 'span',
            text: '{Empty}',
            cssClass: 'italic-light',
            parent: parent
        });
        return;
    }
    let objType = obj.constructor.name;
    if (objType === "Object") {
        /*
            for object type create a table with  rows and two td each row
            td1: key
            td2: value
        */
       
        let table = createElement({
            type: "table",
            cssClass: "table,table-bordered," + (data ? (data.cssClass ? data.cssClass: "") : "") ,
            attr: (data ? (data.attr ? data.attr : {}) : {})
        });
        Object.keys(obj).forEach((key, index) => {
            if (obj[key] === null || obj[key] === undefined ) {
                return false;
            }
            let tr = createElement({
                type: "tr",
            });
            
           
            let cssClass = "";
            let id = key + "-index";
            let additionalRowData = {
                attr: {
                    "id": id
                },
                cssClass: "collapse,show"
            };

            if (obj[key].constructor.name === "Object") {
                cssClass = "object-banner";
            } else if (obj[key].constructor.name === "Array") {
                cssClass = "array-banner";
            } else {
                additionalRowData = null;
            }
            createElement({
                type: "td",
                //elem: txt,
                text: key,
                parent: tr,
                cssClass: "key",
                cssStyle: "font-weight: 400; box-shadow: inset 5px 0px 0px 0px " + getRandomColor() + ";",
                attr: {
                    "data-toggle": "collapse",
                    "data-target": "#" + id
                }
            });
            let td = createElement({
                type: "td",
                cssClass: cssClass,
                
            });
            populateWithTable(obj[key], td, additionalRowData);
            tr.appendChild(td);
            table.appendChild(tr);
        });
        
        parent.appendChild(table);
    } else if (objType === "Array") {
        let table = createElement({
            type: "table",
            cssClass: "table,table-striped," + (data ? (data.cssClass ? data.cssClass: "") : "") ,
            attr: (data ? (data.attr ? data.attr : {}) : {})
        });
        obj.forEach((item) => {
            let tr = createElement({
                type: "tr"
            });
            let cssClass = "";
            if (item.constructor.name === "Object") {
                cssClass = "object-banner";
            } else if (item.constructor.name === "Array") {
                cssClass = "array-banner";
            }
            let td = createElement({
                type: "td",
                cssClass: cssClass
            });
            populateWithTable(item, td);
            tr.appendChild(td);
            table.appendChild(tr);
        });
        parent.appendChild(table);
    } else {
        let type = "td";
        let cssClass = "";
        if (parent.constructor.name === "HTMLTableCellElement") {
            type = "span";
            //cssClass = "badge,badge-light";
        }
        createElement({
            type: type,
            text: obj.toString(),
            cssClass: cssClass,
            parent: parent
        })
    }
}
document.getElementById("browsedJSON").addEventListener("change", function (e) {
    let file = this.files[0];
    let fr = new FileReader();
    fr.onload = function (e) {
        textArea.value = e.target.result;
    };
    fr.readAsText(file);
});

function showMessage(title, bodytext, type) {
    const classes = {
        'success': 'alert-success',
        'error': 'alert-danger'
    }
    $('#errorBox').html(
        "<div class='alert " + classes[type] + " alert-dismissible'>" +
        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
        "<strong>" + title + "!</strong> <br />" + bodytext +
        "</div>"
    );
    
};

function randomHexadecimal(compare) {
    let clr =  Math.floor(Math.random()*16777215).toString(16); // 16777215 = ffffff on base 10
    let okay = true;
    if (compare) {
        if (compare.lowerLimit && (parseInt("0x" + clr,16) < parseInt("0x" + compare.lowerLimit,16))) {
           okay = false;
        }
        if (compare.higherLimit && (parseInt("0x" + clr,16) > parseInt("0x" + compare.higherLimit,16))) {
            okay = false;
         }
    }
    clr = okay ? clr: randomHexadecimal(compare);
    return clr;
}

function getRandomColor() {
    return "#" + randomHexadecimal({
        "lowerLimit" : "555555",
        "higherLimit": "BBBBBB"
    });
}

function isThere(inp) {
    let otype = inp.constructor.name;
    if (otype === "Object") {
        return Object.keys(inp).length > 0;
    }
    if (otype === "Array") {
        return inp.length > 0;
    }
    if (inp.toString().trim() !== "" || inp) {
        return true;
    }
    return false;
}