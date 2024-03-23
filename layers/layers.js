var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_test_1 = new ol.format.GeoJSON();
var features_test_1 = format_test_1.readFeatures(json_test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_1.addFeatures(features_test_1);
var lyr_test_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_1, 
                style: style_test_1,
                popuplayertitle: "test",
                interactive: true,
                title: '<img src="styles/legend/test_1.png" /> test'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_test_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_test_1];
lyr_test_1.set('fieldAliases', {'SL NO': 'SL NO', 'Sample ID': 'Sample ID', 'Sample Des': 'Sample Des', 'Water Cont': 'Water Cont', '"Liquid  L': '"Liquid  L', 'Plastic Li': 'Plastic Li', 'Plasticity': 'Plasticity', '* Shrinkag': '* Shrinkag', '"Plastic L': '"Plastic L', 'Specific G': 'Specific G', 'GSD Gravel': 'GSD Gravel', 'GSD Coarse': 'GSD Coarse', 'GSD Medium': 'GSD Medium', 'GSD  Fine': 'GSD  Fine', 'GSD      %': 'GSD      %', 'Hydro An': 'Hydro An', 'Hydro An_1': 'Hydro An_1', 'Soil Class': 'Soil Class', 'Free swell': 'Free swell', 'Pre Consol': 'Pre Consolidation Pressure (kPa)', 'Coefficien': 'Coefficien', 'Coeffici_1': 'Coeffici_1', 'Compressio': 'Compressio', 'Unconfined': 'Unconfined', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_test_1.set('fieldImages', {'SL NO': 'TextEdit', 'Sample ID': 'TextEdit', 'Sample Des': 'TextEdit', 'Water Cont': 'TextEdit', '"Liquid  L': '', 'Plastic Li': 'TextEdit', 'Plasticity': 'TextEdit', '* Shrinkag': 'TextEdit', '"Plastic L': '', 'Specific G': 'TextEdit', 'GSD Gravel': 'TextEdit', 'GSD Coarse': 'TextEdit', 'GSD Medium': 'TextEdit', 'GSD  Fine': 'TextEdit', 'GSD      %': 'TextEdit', 'Hydro An': 'TextEdit', 'Hydro An_1': 'TextEdit', 'Soil Class': 'TextEdit', 'Free swell': 'TextEdit', 'Pre Consol': 'TextEdit', 'Coefficien': 'TextEdit', 'Coeffici_1': 'TextEdit', 'Compressio': 'TextEdit', 'Unconfined': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_test_1.set('fieldLabels', {'SL NO': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'Sample Des': 'inline label - visible with data', 'Water Cont': 'inline label - visible with data', '"Liquid  L': 'inline label - visible with data', 'Plastic Li': 'inline label - visible with data', 'Plasticity': 'inline label - visible with data', '* Shrinkag': 'inline label - visible with data', '"Plastic L': 'inline label - visible with data', 'Specific G': 'inline label - visible with data', 'GSD Gravel': 'inline label - visible with data', 'GSD Coarse': 'inline label - visible with data', 'GSD Medium': 'inline label - visible with data', 'GSD  Fine': 'inline label - visible with data', 'GSD      %': 'inline label - visible with data', 'Hydro An': 'inline label - visible with data', 'Hydro An_1': 'inline label - visible with data', 'Soil Class': 'inline label - visible with data', 'Free swell': 'inline label - visible with data', 'Pre Consol': 'inline label - visible with data', 'Coefficien': 'inline label - visible with data', 'Coeffici_1': 'inline label - visible with data', 'Compressio': 'inline label - visible with data', 'Unconfined': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', });
lyr_test_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});