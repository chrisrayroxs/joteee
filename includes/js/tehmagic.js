

$(document).ready(function() {
	
	
//load roundabout
      $('.roundabout').roundabout({
      	duration: 200
      });
	
// load colorpicker
$('#colorSelector').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector div').css('backgroundColor', '#' + hex);
	}
});

//load jquery slider
	$('#slider-bar').slider({
		handle: '#slider-handle',
		min: 0,
		max: 41,
		value: 4,
		slide: function(e,ui){
		var mypos = $('#slider-bar').slider("value");
		$('#slider-bubble').val(mypos);
		}
	});

//initially render all the icons
	renderIcon("pencil");
	renderIcon("bubble");
	renderIcon("smiles");
	renderIcon("box");
	
//open tool menus upon click
	$('#drawButton').click(function() {
		draw();
		redo('pencil');
		$("#textTools").fadeOut("fast");
		$("#smilesTools").fadeOut("fast");
		$("#boxTools").fadeOut("fast");
		$("#drawingTools").fadeIn("fast");
	});
	$('#textButton').click(function() {
		redo('bubble');
		$("#drawingTools").fadeOut("fast");
		$("#smilesTools").fadeOut("fast");
		$("#boxTools").fadeOut("fast");
		$("#textTools").fadeIn("fast");
	});
	$('#smilesButton').click(function() {
		redo('smiles');
		$("#drawingTools").fadeOut("fast");
		$("#textTools").fadeOut("fast");
		$("#boxTools").fadeOut("fast");
		$("#smilesTools").fadeIn("fast");
	});
	$('#boxButton').click(function() {
		redo('box');
		$("#drawingTools").fadeOut("fast");
		$("#textTools").fadeOut("fast");
		$("#smilesTools").fadeOut("fast");
		$("#boxTools").fadeIn("fast");
	});
	
	$("#nttitle").mousedown(function(e) {
			newtitle();
		});
	$("#ntlabel").mousedown(function(e) {
			newlabel();
		});
	$("#ntparagraph").mousedown(function(e) {
			newparagraph();
	});

});