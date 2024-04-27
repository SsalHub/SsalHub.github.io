
/**
 * Append Tooltip
 * @param {Element} parentElement parent element 
 * @param {String} medalName medal name
 * @param {String} medalName_kr medal name in korean
 * @param {Object} dataList medal data in array obj
 */
function appendTooltip(parentElement, medalName, medalName_kr, dataList) {
    // Init Variables
    let tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    // let tooltipFooter = document.createElement("div");
    //   tooltipFooter.className = "tooltip_footer";

    // Tooltip Header
    tooltipHeader = initTooltipHeader(medalName, medalName_kr)

    // Tooltip Body (Article)
    tooltipArticle = initTooltipArticle(dataList);

    tooltip.append(tooltipHeader);
    tooltip.append(tooltipArticle);
    //   tooltip.append(tooltipFooter);

    parentElement.append(tooltip);
    parentElement.addEventListener("mousemove", (e) => {
        tooltip.style.left = (e.pageX + 25) + "px"; // x pos by page
        tooltip.style.top = (e.pageY - 120) + "px"; // y pos by page
    });
}

/**
 * Init Medal Tooltip Header 
 * @param {String} medalName medal name
 * @param {String} medalName_kr medal name in korean
 */
function initTooltipHeader(medalName, medalName_kr) {
    let tooltipHeader = document.createElement("span");
    tooltipHeader.className = "tooltip_header";

    var img = document.createElement("img");
    img.setAttribute("src", "/assets/img/lostsaga/medal/" + medalName + ".png");
    var span = document.createElement("span");
    span.innerHTML = "&lt;" + medalName_kr + "&gt;";
    tooltipHeader.append(img);
    tooltipHeader.append(span);

    return tooltipHeader;
}

/**
 * Init Medal Tooltip Table 
 * @param {Object} dataList medal data array object
 */
function initTooltipArticle(dataList) {
    let tooltipArticle = document.createElement("table");
    tooltipArticle.className = "tooltip_article";

    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.setAttribute("align", "center");
    legend.innerHTML = "능력치";
    fieldset.append(legend);
    var tbody = document.createElement("tbody");
    // init tr array
    var tr = [
        document.createElement("tr"),
        document.createElement("tr"),
        document.createElement("tr"),
        document.createElement("tr")
    ];
    // tr[0].setAttribute("class", "gray_row");
    tr[0].innerHTML =
        '<td>' + getTooltipTableData("무기스킬", dataList[4]) + '</td>' +
        '<td>' + getTooltipTableData("기본공격력", dataList[0]) + '</td>';
    tbody.append(tr[0]);
    // tr == 1
    // tr[1].setAttribute("class", "whilte_row");
    tr[1].innerHTML =
        '<td>' + getTooltipTableData("갑옷스킬", dataList[5]) + '</td>' +
        '<td>' + getTooltipTableData("기본방어력", dataList[1]) + '</td>';
    tbody.append(tr[1]);
    // tr == 2
    // tr[2].setAttribute("class", "gray_row");
    tr[2].innerHTML =
        '<td>' + getTooltipTableData("투구스킬", dataList[6]) + '</td>' +
        '<td>' + getTooltipTableData("이동속도", dataList[2]) + '</td>';
    tbody.append(tr[2]);
    // tr == 3
    // tr[3].setAttribute("class", "whilte_row");
    tr[3].innerHTML =
        '<td>' + getTooltipTableData("망토스킬", dataList[7]) + '</td>' +
        '<td>' + getTooltipTableData("드랍피해감소", dataList[3]) + '</td>';
    tbody.append(tr[3]);
    fieldset.append(tbody);
    tooltipArticle.append(fieldset);
    return tooltipArticle;
}

/**
 * Get innerHTML String 
 * @param {String} dataType type of medal data
 * @param {String} data medal data
 */
function getTooltipTableData(dataType, data) {
    if (data == "" || data == "0") {
        // no data
        return '<font>' + dataType + '</font>';
    } else if (data[0] != "-") {
        data = "+" + data;
        return '<font class="data_type">' + dataType + '</font><font class="data_text">' + data + '</font>';
    }
    return "Error!";
}








/**
 * Not Used
 * @param {Element} parentElement parent element 
 * @param {String} medalName medal name
 * @param {String} medalName_kr medal name in korean
 * @param {Object} dataList medal data in array obj
 */
function openTooltip(parentElement, medalName, medalName_kr, dataList) {

    // Init Variables
    let tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    let tooltipHeader = document.createElement("div");
    tooltipHeader.className = "tooltip_header";
    let tooltipArticle = document.createElement("table");
    tooltipArticle.className = "tooltip_article";
    // let tooltipFooter = document.createElement("div");
    //   tooltipFooter.className = "tooltip_footer";

    // Tooltip Header
    div = document.createElement("div");
    img = document.createElement("img");
    img.setAttribute("src", "/assets/img/lostsaga/medal/" + medalName + ".png");
    label = document.createElement("label");
    label.innerHTML = "<b>&lt; + " + medalName_kr + "&gt;</b>";
    div.append(img);
    tooltipHeader.append(div);
    tooltipHeader.append(label);

    // Tooltip Body (Article)
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.setAttribute("align", "center");
    legend.innerHTML = "능력치";
    fieldset.append(legend);
    var tbody = document.createElement("tbody");
    // init tr array
    var tr = [
        document.createElement("tr"),
        document.createElement("tr"),
        document.createElement("tr"),
        document.createElement("tr")
    ];
    // i == 0
    var i = 0;
    // tr.join(document.createElement("tr"));
    tr[i].setAttribute("class", "gray_row");
    tr[i].innerHTML =
        getTableData("무기스킬", dataList[4]) +
        getTableData("기본공격력", dataList[0]);
    tbody.append(tr[i]);
    // i == 1
    i += 1;
    // tr.join(createElement("tr"));
    tr[i].setAttribute("class", "whilte_row");
    tr[i].innerHTML =
        getTableData("갑옷스킬", dataList[5]) +
        getTableData("기본방어력", dataList[1]);
    tbody.append(tr[i]);
    // i == 2
    i += 1;
    // tr.join(createElement("tr"));
    tr[i].setAttribute("class", "gray_row");
    tr[i].innerHTML =
        getTableData("투구스킬", dataList[6]) +
        getTableData("이동속도", dataList[2]);
    tbody.append(tr[i]);
    // i == 3
    i += 1;
    // tr.join(createElement("tr"));
    tr[i].setAttribute("class", "whilte_row");
    tr[i].innerHTML =
        getTableData("망토스킬", dataList[7]) +
        getTableData("드랍피해감소", dataList[3]);
    tbody.append(tr[i]);
    fieldset.append(tbody);
    tooltipArticle.append(fieldset);

    // tooltipFooter.innerHTML += "<span>last update : " + updated_at + "</span>";

    // tooltipHeader.innerHTML += '<div><img src="'
    //     + imageSrc + '" onerror="this.src=\''
    //     + onerrorSrc + '\'"></div><label><b>&lt;'
    //     + name_kr
    //     + '&gt;</b></label>';

    //   tooltipArticle.innerHTML +=
    //     '<fieldset><legend align="center">능력치</legend><tbody><tr class="gray_row">' +
    //     getTableData("무기스킬", dataList[4]) +
    //     getTableData("기본공격력", dataList[0]) +
    //     "</tr>" +
    //     '<tr class="white_row">' +
    //     getTableData("갑옷스킬", dataList[5]) +
    //     getTableData("기본방어력", dataList[1]) +
    //     "</tr>" +
    //     '<tr class="gray_row">' +
    //     getTableData("투구스킬", dataList[6]) +
    //     getTableData("이동속도", dataList[2]) +
    //     "</tr>" +
    //     '<tr class="white_row">' +
    //     getTableData("망토스킬", dataList[7]) +
    //     getTableData("드랍피해감소", dataList[3]) +
    //     "</tr></tbody></fieldset>";

    parentElement.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.clientX + "px";
        tooltip.style.top = e.clientY + "px";
    });

    tooltip.append(tooltipHeader);
    tooltip.append(tooltipArticle);
    //   tooltip.append(tooltipFooter);

    parentElement.append(tooltip);
}


/**
 * Not Used
 * Close Tooltip
 * @param {Element} parentElement parent element
 */
function closeTooltip(parentElement) {
    var tooltip = parentElement.querySelector(".tooltip");
    tooltip.remove();
}