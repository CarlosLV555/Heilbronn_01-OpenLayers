var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gemeinde_1 = new ol.format.GeoJSON();
var features_Gemeinde_1 = format_Gemeinde_1.readFeatures(json_Gemeinde_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeinde_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeinde_1.addFeatures(features_Gemeinde_1);
var lyr_Gemeinde_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemeinde_1, 
                style: style_Gemeinde_1,
                popuplayertitle: "Gemeinde",
                interactive: false,
                title: '<img src="styles/legend/Gemeinde_1.png" /> Gemeinde'
            });
var format_BewertungLebensmittelnahversorgung_2 = new ol.format.GeoJSON();
var features_BewertungLebensmittelnahversorgung_2 = format_BewertungLebensmittelnahversorgung_2.readFeatures(json_BewertungLebensmittelnahversorgung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BewertungLebensmittelnahversorgung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BewertungLebensmittelnahversorgung_2.addFeatures(features_BewertungLebensmittelnahversorgung_2);
var lyr_BewertungLebensmittelnahversorgung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BewertungLebensmittelnahversorgung_2, 
                style: style_BewertungLebensmittelnahversorgung_2,
                popuplayertitle: "Bewertung Lebensmittelnahversorgung",
                interactive: true,
    title: 'Bewertung Lebensmittelnahversorgung<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_0.png" /> 0<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_1.png" /> 1<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_2.png" /> 2<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_3.png" /> 3<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_4.png" /> 4<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_5.png" /> 5<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_6.png" /> 6<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_7.png" /> 7<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_8.png" /> 8<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_9.png" /> 9<br />\
    <img src="styles/legend/BewertungLebensmittelnahversorgung_2_10.png" /> 10<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Gemeinde_1.setVisible(true);lyr_BewertungLebensmittelnahversorgung_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gemeinde_1,lyr_BewertungLebensmittelnahversorgung_2];
lyr_Gemeinde_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GEN': 'GEN', });
lyr_BewertungLebensmittelnahversorgung_2.set('fieldAliases', {'fid': 'fid', 'id': 'ID', 'GEN': 'GEN', 'Rentner': 'Anteil Rentner:innen (%)', 'Haushaltse': 'Haushaltseinkommen (€ pro Jahr)', 'Auspendler': 'Auspendler', 'PKW-Besitz': 'PKW-Besitz', 'Beschäfti': 'Anteil Akademiker:innen (%)', 'Einwohner_': 'Einwohner in der Wabe', 'Wabenflaec': 'Wabenflaec', 'Prozentual': 'Prozentual', 'Prozentu_1': 'Prozentu_1', 'Gewichtete': 'Gewichtete', 'Prozentu_2': 'Prozentu_2', 'Prozentu_3': 'Prozentu_3', 'Prozentu_4': 'Prozentu_4', 'Gewichte_1': 'Gewichte_1', 'Prozentu_5': 'Prozentu_5', 'Prozentu_6': 'Prozentu_6', 'Prozentu_7': 'Prozentu_7', 'Prozentu_8': 'Prozentu_8', 'Gewichte_2': 'Gewichte_2', 'Gewichte_3': 'Bewertung Lebensmittlenahversorgung', 'EWD': 'Einwohnendendichte (Anzahl pro km2)', });
lyr_Gemeinde_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GEN': 'TextEdit', });
lyr_BewertungLebensmittelnahversorgung_2.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'GEN': 'Hidden', 'Rentner': 'TextEdit', 'Haushaltse': 'TextEdit', 'Auspendler': 'Hidden', 'PKW-Besitz': 'Hidden', 'Beschäfti': 'TextEdit', 'Einwohner_': 'TextEdit', 'Wabenflaec': 'Hidden', 'Prozentual': 'Hidden', 'Prozentu_1': 'Hidden', 'Gewichtete': 'Hidden', 'Prozentu_2': 'Hidden', 'Prozentu_3': 'Hidden', 'Prozentu_4': 'Hidden', 'Gewichte_1': 'Hidden', 'Prozentu_5': 'Hidden', 'Prozentu_6': 'Hidden', 'Prozentu_7': 'Hidden', 'Prozentu_8': 'Hidden', 'Gewichte_2': 'Hidden', 'Gewichte_3': 'TextEdit', 'EWD': 'TextEdit', });
lyr_Gemeinde_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'GEN': 'no label', });
lyr_BewertungLebensmittelnahversorgung_2.set('fieldLabels', {'id': 'inline label - visible with data', 'Rentner': 'inline label - visible with data', 'Haushaltse': 'inline label - visible with data', 'Beschäfti': 'inline label - visible with data', 'Einwohner_': 'inline label - visible with data', 'Gewichte_3': 'inline label - visible with data', 'EWD': 'inline label - visible with data', });
lyr_BewertungLebensmittelnahversorgung_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});