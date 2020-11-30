var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, buttonColor, colorCode) {
	tabButtons.forEach(function(node) {
		node.style.backgroundColor = '';
		node.style.color = '';
	});
	tabButtons[panelIndex].style.backgroundColor=buttonColor;
	tabButtons[panelIndex].style.color='#F9F9F9';
	tabPanels.forEach(function(node) {
		node.style.display = 'none';
	});
	tabPanels[panelIndex].style.display = 'block';
	tabPanels[panelIndex].style.backgroundColor = colorCode;
};

showPanel(0,'#290404', '#5E8F77');
