var size = 0;
var placement = 'point';
function categories_Vendors_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'B':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(89,240,162,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(89,240,162,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'B;SEAH':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,179,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,179,1,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'V':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,200,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,1,200,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'E':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(1,255,18,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(1,255,18,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'F':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(197,231,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(197,231,59,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'longan':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,179,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,179,1,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'longan/lychee':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,179,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,179,1,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'mango;longan':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,179,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,179,1,0.30196078431372547)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SEAH':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
             fill: new ol.style.Fill({color: 'rgba(132,47,143,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
             fill: new ol.style.Fill({color: 'rgba(129,15,124,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Vendors_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Produce Type");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Vendors_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
