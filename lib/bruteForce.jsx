
//set unit preferences
var strtRulerUnits = app.preferences.rulerUnits;
var strtTypeUnits = app.preferences.typeUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;


/////////////////////////////////////////////////////////////////////////////////////////////

var hideAllLayerSets = function(doc) {
	for(var i =0; i<doc.layerSets.length; i++) {
		doc.layerSets[i].visible = false;
	}
};

var useFolder = function(path) {
	path = path.replace('//','/');
	var outputFolder = new Folder(path);
	if(!outputFolder.exists) {
		outputFolder.create();
		$.writeln("Created new folder: " + path);
	} else {
		$.writeln("Used existing folder: " + path);
	}
	return outputFolder;
};


// Place file as Smart
function PlaceFile(placeRef) {
   function cTID(s) {return app.charIDToTypeID(s); };
   var desc = new ActionDescriptor();
   desc.putPath(cTID('null'), new File(placeRef));
   desc.putEnumerated(cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
   var ldesc = new ActionDescriptor();
   ldesc.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0.000000 );
   ldesc.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0.000000 );
   desc.putObject(cTID('Ofst'), cTID('Ofst'), ldesc);
   executeAction(cTID('Plc '), desc, DialogModes.NO);
   // Resize the layer
   var layer = app.activeDocument.activeLayer;
   layer.resize(100, 100);
   return layer;
}

// Make a Smart Layer
function MakeSmartLayer() {
   function cTID(s) { return app.charIDToTypeID(s); };
   function sTID(s) { return app.stringIDToTypeID(s); };
   executeAction(sTID('newPlacedLayer'), undefined, DialogModes.NO);
}

var DebugDoc = function(){
	var layerset = app.activeDocument.layerSets.add();
	layerset.name = "voltron-property";

	$.writeln(app.activeDocument.artLayers.length);
	for(var i =0; i<app.activeDocument.artLayers.length; i++) {
		// app.activeDocument.artLayers[i].visible = false;
		if(app.activeDocument.artLayers[i].name !== "Background") {
			app.activeDocument.artLayers[i].move(layerset, ElementPlacement.INSIDE);
		}

	}
	$.writeln("done");
};

var DebugApp = function() {
	for(var i = 0; i<app.documents.length; i++) {
		$.writeln(app.documents[i].name);
	}
	$.writeln("current doc " +app.activeDocument.name);

	// app.activeDocument = app.documents[1];
	// $.writeln("active doc " +app.activeDocument.name);

	//save as
	//app.activeDocument.saveAs(new File("~/Downloads/photoshop-exporter-jsx/test/tmp.psd"));
};

// Select Icon file
var outputFilePath = "~/Downloads/photoshop-exporter-jsx/test/blank.psd";
var outputFile = File(outputFilePath); //hard code a filename

// if(file === null) return; // cancelled.
app.open(outputFile);


var docRef = app.activeDocument;
var inputFile = new File("~/Downloads/photoshop-exporter-jsx/test/test.psd");
PlaceFile(inputFile);
MakeSmartLayer();
// RasterizeSmart();

//start with input file
	//loop through each layer
		//save each visible layer as it's own file to a known temp place

//start with output file
	//place temp input files




DebugDoc();
DebugApp();
