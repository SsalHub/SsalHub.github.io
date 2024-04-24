function openTooltip(id, name, name_kr, imageSrc, onerrorSrc, dataList, updated_at) {
    var parentDiv = document.getElementById(id);
    let tooltip = document.createElement('div');
    let tooltipHeader = document.createElement('div');
    let tooltipArticle = document.createElement('table');
    let tooltipFooter = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltipHeader.className = 'tooltip_header';
    tooltipArticle.className = 'tooltip_article';
    tooltipFooter.className = 'tooltip_footer';
    tooltipHeader.innerHTML += '<div><img src="' + imageSrc + '" onerror="this.src=\'' + onerrorSrc + '\'"></div><label><b>&lt;' + name_kr + '&gt;</b></label>';

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

    parentDiv.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.clientX + 'px';
        tooltip.style.top = e.clientY + 'px';
    });

    tooltip.append(tooltipHeader);
    tooltip.append(tooltipArticle);
    tooltip.append(tooltipFooter);
    parentDiv.append(tooltip);
}

function closeTooltip(id) {
    var parentDiv = document.getElementById(id);
    var tooltip = parentDiv.querySelector('.tooltip');
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
    return '오류';
}