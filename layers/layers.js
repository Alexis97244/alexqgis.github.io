var wms_layers = [];

var format_contoursgeographiquesdesdepartements2019_0 = new ol.format.GeoJSON();
var features_contoursgeographiquesdesdepartements2019_0 = format_contoursgeographiquesdesdepartements2019_0.readFeatures(json_contoursgeographiquesdesdepartements2019_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contoursgeographiquesdesdepartements2019_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contoursgeographiquesdesdepartements2019_0.addFeatures(features_contoursgeographiquesdesdepartements2019_0);
var lyr_contoursgeographiquesdesdepartements2019_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contoursgeographiquesdesdepartements2019_0, 
                style: style_contoursgeographiquesdesdepartements2019_0,
                interactive: true,
                title: '<img src="styles/legend/contoursgeographiquesdesdepartements2019_0.png" /> contours-geographiques-des-departements-2019'
            });

lyr_contoursgeographiquesdesdepartements2019_0.setVisible(true);
var layersList = [lyr_contoursgeographiquesdesdepartements2019_0];
lyr_contoursgeographiquesdesdepartements2019_0.set('fieldAliases', {'N__DU_D_PA': 'N° du département', 'NOM_D_PART': 'Département', 'MONTANT_DE': 'Montant de la DGF 2020 (en €)', 'VARIATION_': 'Variation de la DGF entre 2019 et 2020 (en €)', 'PART_DE_LA': 'Part de la péréquation dans la DGF 2020 (en %)', 'MONTANT_D2': 'Montant de la DGF 2020 par habitant (en €)', 'PART_DE_L2': 'Part de la DGF 2020 dans les recettes de fonctionnement 2018 (en %)', 'VARIATION2': 'Variation de la DGF entre 2019 et 2020 par rapport aux RRF 2018 (en %)', });
lyr_contoursgeographiquesdesdepartements2019_0.set('fieldImages', {'N__DU_D_PA': 'Range', 'NOM_D_PART': 'TextEdit', 'MONTANT_DE': 'Range', 'VARIATION_': 'TextEdit', 'PART_DE_LA': 'TextEdit', 'MONTANT_D2': 'TextEdit', 'PART_DE_L2': 'TextEdit', 'VARIATION2': 'TextEdit', });
lyr_contoursgeographiquesdesdepartements2019_0.set('fieldLabels', {'N__DU_D_PA': 'header label', 'NOM_D_PART': 'header label', 'MONTANT_DE': 'header label', 'VARIATION_': 'header label', 'PART_DE_LA': 'header label', 'MONTANT_D2': 'header label', 'PART_DE_L2': 'header label', 'VARIATION2': 'header label', });
lyr_contoursgeographiquesdesdepartements2019_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});