var wms_layers = [];

var format_Vendors_0 = new ol.format.GeoJSON();
var features_Vendors_0 = format_Vendors_0.readFeatures(json_Vendors_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vendors_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vendors_0.addFeatures(features_Vendors_0);
var lyr_Vendors_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vendors_0, 
                style: style_Vendors_0,
                popuplayertitle: "Vendors",
                interactive: true,
    title: 'Vendors<br />\
    <img src="styles/legend/Vendors_0_0.png" /> Both Fruit + Vegetables<br />\
    <img src="styles/legend/Vendors_0_1.png" /> Both + Seafood<br />\
    <img src="styles/legend/Vendors_0_2.png" /> Vegetables<br />\
    <img src="styles/legend/Vendors_0_3.png" /> Eeverything<br />\
    <img src="styles/legend/Vendors_0_4.png" /> Fruit<br />\
    <img src="styles/legend/Vendors_0_5.png" /> Longan<br />\
    <img src="styles/legend/Vendors_0_6.png" /> Longan + Lychee<br />\
    <img src="styles/legend/Vendors_0_7.png" /> Mango + Longan<br />\
    <img src="styles/legend/Vendors_0_8.png" /> Seafood<br />\
    <img src="styles/legend/Vendors_0_9.png" /> <br />'
        });
var format_Wholesale_1 = new ol.format.GeoJSON();
var features_Wholesale_1 = format_Wholesale_1.readFeatures(json_Wholesale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wholesale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wholesale_1.addFeatures(features_Wholesale_1);
var lyr_Wholesale_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wholesale_1, 
                style: style_Wholesale_1,
                popuplayertitle: "Wholesale",
                interactive: true,
    title: 'Wholesale<br />\
    <img src="styles/legend/Wholesale_1_0.png" /> B<br />\
    <img src="styles/legend/Wholesale_1_1.png" /> V<br />\
    <img src="styles/legend/Wholesale_1_2.png" /> F<br />\
    <img src="styles/legend/Wholesale_1_3.png" /> SEAH<br />'
        });

lyr_Vendors_0.setVisible(true);lyr_Wholesale_1.setVisible(true);
var layersList = [lyr_Vendors_0,lyr_Wholesale_1];
lyr_Vendors_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Match_addr': 'Match_addr', 'X': 'X', 'Y': 'Y', 'Type': 'Type', 'Name': 'Name', 'Address': 'Address', 'Borough': 'Borough', 'Produce Type': 'Produce Type', '2006': '2006', '2007': '2007', '2008': '2008', '2009': '2009', '2010': '2010', '2011': '2011', '2012': '2012', '2013': '2013', '2014': '2014', '2015': '2015', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020', '2021': '2021', '2022': '2022', '2023': '2023', 'osm_type': 'osm_type', 'display_na': 'display_na', 'place_id': 'place_id', 'class': 'class', 'type_2': 'type_2', 'road': 'road', 'village': 'village', 'city_distr': 'city_distr', 'town': 'town', 'city': 'city', 'state': 'state', 'country': 'country', 'postcode': 'postcode', 'Color': 'Color', });
lyr_Wholesale_1.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', 'osm_type': 'osm_type', 'display_na': 'display_na', 'place_id': 'place_id', 'class': 'class', 'type': 'type', 'road': 'road', 'village': 'village', 'city_distr': 'city_distr', 'town': 'town', 'city': 'city', 'state': 'state', 'country': 'country', 'postcode': 'postcode', 'Color': 'Color', });
lyr_Vendors_0.set('fieldImages', {'OBJECTID': 'Range', 'Match_addr': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Type': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'Borough': 'TextEdit', 'Produce Type': 'TextEdit', '2006': 'CheckBox', '2007': 'CheckBox', '2008': 'CheckBox', '2009': 'CheckBox', '2010': 'CheckBox', '2011': 'CheckBox', '2012': 'CheckBox', '2013': 'CheckBox', '2014': 'CheckBox', '2015': 'CheckBox', '2016': 'CheckBox', '2017': 'CheckBox', '2018': 'CheckBox', '2019': 'CheckBox', '2020': 'CheckBox', '2021': 'CheckBox', '2022': 'CheckBox', '2023': 'CheckBox', 'osm_type': 'TextEdit', 'display_na': 'TextEdit', 'place_id': 'TextEdit', 'class': 'TextEdit', 'type_2': 'TextEdit', 'road': 'TextEdit', 'village': 'TextEdit', 'city_distr': 'TextEdit', 'town': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'postcode': 'TextEdit', 'Color': 'TextEdit', });
lyr_Wholesale_1.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', 'field_28': 'TextEdit', 'osm_type': 'TextEdit', 'display_na': '', 'place_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'road': 'TextEdit', 'village': 'TextEdit', 'city_distr': '', 'town': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'postcode': 'TextEdit', 'Color': '', });
lyr_Vendors_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'Match_addr': 'no label', 'X': 'hidden field', 'Y': 'hidden field', 'Type': 'no label', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'Borough': 'hidden field', 'Produce Ty': 'inline label - visible with data', '2006': 'hidden field', '2007': 'hidden field', '2008': 'hidden field', '2009': 'hidden field', '2010': 'hidden field', '2011': 'hidden field', '2012': 'hidden field', '2013': 'hidden field', '2014': 'hidden field', '2015': 'hidden field', '2016': 'hidden field', '2017': 'hidden field', '2018': 'hidden field', '2019': 'hidden field', '2020': 'hidden field', '2021': 'hidden field', '2022': 'hidden field', '2023': 'hidden field', 'osm_type': 'hidden field', 'display_na': 'hidden field', 'place_id': 'hidden field', 'class': 'hidden field', 'type_2': 'hidden field', 'road': 'hidden field', 'village': 'hidden field', 'city_distr': 'hidden field', 'town': 'hidden field', 'city': 'hidden field', 'state': 'hidden field', 'country': 'hidden field', 'postcode': 'hidden field', 'Color': 'hidden field', });
lyr_Wholesale_1.set('fieldLabels', {'field_1': 'hidden field', 'field_2': 'no label', 'field_3': 'hidden field', 'field_4': 'hidden field', 'field_5': 'hidden field', 'field_6': 'no label', 'field_7': 'hidden field', 'field_8': 'hidden field', 'field_9': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', 'field_12': 'hidden field', 'field_13': 'hidden field', 'field_14': 'hidden field', 'field_15': 'hidden field', 'field_16': 'hidden field', 'field_17': 'hidden field', 'field_18': 'hidden field', 'field_19': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', 'field_22': 'hidden field', 'field_23': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', 'field_26': 'hidden field', 'field_27': 'hidden field', 'field_28': 'hidden field', 'osm_type': 'hidden field', 'display_na': 'hidden field', 'place_id': 'hidden field', 'class': 'hidden field', 'type': 'hidden field', 'road': 'hidden field', 'village': 'hidden field', 'city_distr': 'hidden field', 'town': 'hidden field', 'city': 'hidden field', 'state': 'hidden field', 'country': 'hidden field', 'postcode': 'hidden field', 'Color': 'hidden field', });
lyr_Wholesale_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});