var oldRuler = app.preferences.rulerUnits;
var oldType = app.preferences.typeUnits;
var oldDisplayDialogs = app.displayDialogs;
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
while(app.documents.length){
app.activeDocument.close();}
alert("Please verify if you had saved the folder in path C:/idCardGenerate for the script to work.Click 'OK' to begin generation!");
app.displayDialogs = DialogModes.NO
//#######################################  DATABASE OF MEMBERS  ###############################################################
var database = Array(

Array("sakti","sakti","Cube open"),
Array("aishwarya","aishwarya","Cube open"),
Array("nf","vignesh","Cube open"),


);
var numberphotos=3;				//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  MAKE SURE TO UPDATE THIS VARIABLE AS THE DATABASE SIZE IS INCREASED  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
for( var num=1;num<=numberphotos;num++) {
if(((num-1)%16)==0){
var samDoc = app.documents.add( 3508 , 4961 , 300	 , "Generate"+num , NewDocumentMode.RGB , DocumentFill.WHITE , 1 );
}
var samFile = open(File("/c/idCardGenerate/support/pragyanid.JPG"));
app.activeDocument = samFile;
// ###################################################  CREATING TEXT LAYER FOR "NAME"  ##############################################
var textlayer = samFile.artLayers.add();
textlayer.kind = LayerKind.TEXT;
textlayer.name="temp";
samFile.activeLayer = samFile.layers["temp"];
var textitem = samFile.artLayers["temp"].textItem;
textitem.size = 14.30;
textitem.font = "Stencil";
var solidColorRef = new SolidColor();
solidColorRef.rgb.red = 255;
solidColorRef.rgb.green = 255;
solidColorRef.rgb.blue = 255;
textitem.color = solidColorRef;
textitem.position = Array( 280 , 778 )
textitem.contents = database[num-1][1];
textitem.justification = Justification.CENTERJUSTIFIED;
//var someColor = foregroundColor.cmyk;
//Samfile.Selection.stroke (someColor, 2, StrokeLocation.OUTSIDE, ColorBlendMode.NORMAL, 100, false);
samFile.layers["temp"].merge();
//####################################################  CREATING TEXT LAYER FOR "DESIGNATION"  #########################################
var textlayer = samFile.artLayers.add();
textlayer.kind = LayerKind.TEXT;
textlayer.name="temp";
samFile.activeLayer = samFile.layers["temp"];
var textitem = samFile.artLayers["temp"].textItem;
textitem.size = 12.30;
textitem.font = "Stencil";
textitem.position = Array( 280 , 878 )
textitem.contents = database[num-1][2];
textitem.color = solidColorRef;
textitem.justification = Justification.CENTERJUSTIFIED;
samFile.layers["temp"].merge();
//#####################################################  CREATING TEXT LAYER FOR "CONTACTS"  #############################################
/*
var textlayer = samFile.artLayers.add();
textlayer.kind = LayerKind.TEXT;
textlayer.name="temp";
samFile.activeLayer = samFile.layers["temp"];
var textitem = samFile.artLayers["temp"].textItem;
textitem.size = 8.5;
textitem.position = Array( 610 , 910 )
textitem.contents = database[num-1][2]+" +"+database[num-1][3];
textitem.justification = Justification.LEFT;
samFile.layers["temp"].rotate(-2.25);
samFile.layers["temp"].merge();
*/
//#####################################################  CREATING ART LAYER FOR "PHOTO" INCLUDE  ###########################################
var photolayer = samFile.artLayers.add();
photolayer.name = "photo";
var photoFile = open(File("/c/idCardGenerate/pragyan/"+database[num-1][0]+".JPG"));
app.activeDocument = photoFile;
if((photoFile.width != 372) || (photoFile.height != 433) ){
//activeDocument.resizeCanvas(372,433,AnchorPosition.MIDDLECENTER);
activeDocument.resizeImage(UnitValue(372,"px"),UnitValue(433,"px"),null,ResampleMethod.BICUBIC);


}
photoFile.artLayers["Background"].copy();
photoFile.close(SaveOptions.DONOTSAVECHANGES);
app.activeDocument = samFile;
var selRegion = Array( Array(384,78), Array(384,511), Array(756,511), Array(756,78), Array(384,78));
samFile.selection.select( selRegion );
samFile.paste();
samFile.layers["photo"].merge();
samFile.artLayers["Background"].copy();
samFile.close(SaveOptions.DONOTSAVECHANGES);
app.activeDocument = samDoc;
//###################################################  SAVING THE ID CARDS IN ONE OF THE FOUR QUADRANTS  #####################################
var w = 3508;
var h = 4961;
switch(num%16){
case 1: {
selRegion = Array(Array(0,0),Array(w/4,0),Array(w/4,h/4),Array(0,h/4),Array(0,0));break;}
case 2: {
selRegion = Array(Array(w/4,0),Array(w/2,0),Array(w/2,h/4),Array(w/4,h/4),Array(w/4,0));break;}
case 3: {
selRegion = Array(Array(w/2,0),Array(w*(3/4),0),Array(w*(3/4),h/4),Array(w/2,h/4),Array(w/2,0));break;}
case 4: {
selRegion = Array(Array(w*(3/4),0),Array(w,0),Array(w,h/4),Array(w*(3/4),h/4),Array(w*(3/4),0));break;}
case 5: {
selRegion = Array(Array(0,h/4),Array(w/4,h/4),Array(w/4,h/2),Array(0,h/2),Array(0,h/4));break;}
case 6: {
selRegion = Array(Array(w/4,h/4),Array(w/2,h/4),Array(w/2,h/2),Array(w/4,h/2),Array(w/4,h/4));break;}
case 7: {
selRegion = Array(Array(w/2,h/4),Array(w*(3/4),h/4),Array(w*(3/4),h/2),Array(w/2,h/2),Array(w/2,h/4));break;}
case 8: {
selRegion = Array(Array(w*(3/4),h/4),Array(w,h/4),Array(w,h/2),Array(w*(3/4),h/2),Array(w*(3/4),h/4));break;}
case 9: {
selRegion = Array(Array(0,h/2),Array(w/4,h/2),Array(w/4,h*(3/4)),Array(0,h*(3/4)),Array(0,h/2));break;}
case 10: {
selRegion = Array(Array(w/4,h/2),Array(w/2,h/2),Array(w/2,h*(3/4)),Array(w/4,h*(3/4)),Array(w/4,h/2));break;}
case 11: {
selRegion = Array(Array(w/2,h/2),Array(w*(3/4),h/2),Array(w*(3/4),h*(3/4)),Array(w/2,h*(3/4)),Array(w/2,h/2));break;}
case 12: {
selRegion = Array(Array(w*(3/4),h/2),Array(w,h/2),Array(w,h*(3/4)),Array(w*(3/4),h*(3/4)),Array(w*(3/4),h/2));break;}
case 13: {
selRegion = Array(Array(0,h*(3/4)),Array(w/4,h*(3/4)),Array(w/4,h),Array(0,h),Array(0,h*(3/4)));break;}
case 14: {
selRegion = Array(Array(w/4,h*(3/4)),Array(w/2,h*(3/4)),Array(w/2,h),Array(w/4,h),Array(w/4,h*(3/4)));break;}
case 15: {
selRegion = Array(Array(w/2,h*(3/4)),Array(w*(3/4),h*(3/4)),Array(w*(3/4),h),Array(w/2,h),Array(w/2,h*(3/4)));break;}
case 0: {
selRegion = Array(Array(w*(3/4),h*(3/4)),Array(w,h*(3/4)),Array(w,h),Array(w*(3/4),h),Array(w*(3/4),h*(3/4)));break;}
}
samDoc.selection.select( selRegion );
samDoc.paste();
samDoc.artLayers["Layer 1"].merge();
}
var pageno=0;
/*
//#############################################  SAVING ALL SEPARATELY GENERATED FILES IN A SINGLE FILE AND CLOSING REST  ############################
var finalDoc = app.documents.add( 3508 , 2480 , 72 , "GeneratedDocument" , NewDocumentMode.RGB , DocumentFill.WHITE , 1 ); 
for(var i = 1;i<(numberphotos-1);i+=4){
app.activeDocument = app.documents["Generate"+i];
app.activeDocument.artLayers["Background"].copy();
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
app.activeDocument = finalDoc;
finalDoc.paste();
finalDoc.artLayers["Layer 1"].name = "Page"+(++pageno);
}
*/
app.preferences.rulerUnits = oldRuler;
app.preferences.typeUnits = oldType;
app.displayDialogs = oldDisplayDialogs;