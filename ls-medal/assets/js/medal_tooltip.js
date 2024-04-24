function openTooltip(parentElem, medalName, medalName_kr, dataList) {
    // Init Variables
    let tooltip = document.createElement('div');
    let tooltipHeader = document.createElement('div');
    let tooltipArticle = document.createElement('table');
    let tooltipFooter = document.createElement('div');

    // set class names
    tooltip.className = 'tooltip';
    tooltipHeader.className = 'tooltip_header';
    tooltipArticle.className = 'tooltip_article';
    tooltipFooter.className = 'tooltip_footer';


    // Tooltip Header
    div = document.createElement(div);
    img = document.createElement(img);
    img.setAttribute("src", "/assets/img/lostsaga/medal/" + medalName + ".png");
    label = document.createElement(label);
    label.innerHTML = "<b>&lt; + " + medalName_kr + "&gt;</b>";
    div.append(img);
    tooltipHeader.append(div);
    tooltipHeader.append(label);




    // tooltipHeader.innerHTML += '<div><img src="'
    //     + imageSrc + '" onerror="this.src=\''
    //     + onerrorSrc + '\'"></div><label><b>&lt;'
    //     + name_kr
    //     + '&gt;</b></label>';

    tooltipArticle.innerHTML += '<fieldset><legend align="center">능력치</legend><tbody><tr class="gray_row">'
        + getTableData('무기스킬', dataList[4])
        + getTableData('기본공격력', dataList[0]) + '</tr>' + '<tr class="white_row">'
        + getTableData('갑옷스킬', dataList[5])
        + getTableData('기본방어력', dataList[1]) + '</tr>' + '<tr class="gray_row">'
        + getTableData('투구스킬', dataList[6])
        + getTableData('이동속도', dataList[2]) + '</tr>' + '<tr class="white_row">'
        + getTableData('망토스킬', dataList[7])
        + getTableData('드랍피해감소', dataList[3]) + '</tr></tbody></fieldset>';
    tooltipFooter.innerHTML += '<span>last update : ' + updated_at + '</span>';

    parentElem.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.clientX + 'px';
        tooltip.style.top = e.clientY + 'px';
    });

    tooltip.append(tooltipHeader);
    tooltip.append(tooltipArticle);
    tooltip.append(tooltipFooter);
    parentElem.append(tooltip);
}

function closeTooltip(parentElem) {
    var tooltip = parentElem.querySelector('.tooltip');
    tooltip.remove();
}

function getTableData(dataType, data) {
    if (data == '' || data == '0') {
        return '<td class="no_data">' + dataType + '</td>';
    }
    else if (data[0] != '-') {
        data = '+' + data;
        return '<td class="data">' + dataType + '<font>' + data + '</font></td>';
    }
    return 'Error!';
}