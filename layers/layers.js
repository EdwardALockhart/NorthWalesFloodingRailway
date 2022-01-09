var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_EnglandRiverandSeaFlooding3_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://environment.data.gov.uk/spatialdata/flood-map-for-planning-rivers-and-sea-flood-zone-3/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "England River and Sea Flooding 3",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EnglandRiverandSeaFlooding3_3, 0]);
var lyr_EnglandRiverandSeaFlooding2_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://environment.data.gov.uk/spatialdata/flood-map-for-planning-rivers-and-sea-flood-zone-2/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "England River and Sea Flooding 2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EnglandRiverandSeaFlooding2_4, 0]);
var lyr_WalesSeaFlooding_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://lle.gov.wales/services/wms/nrw",
    attributions: ' ',
                              params: {
                                "LAYERS": "inspire-nrw:NRW_FLOOD_RISK_FROM_SEA",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Wales Sea Flooding",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_WalesSeaFlooding_5, 0]);
var lyr_WalesRiverFlooding_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://lle.gov.wales/services/wms/nrw",
    attributions: ' ',
                              params: {
                                "LAYERS": "inspire-nrw:NRW_FLOOD_RISK_FROM_RIVERS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Wales River Flooding",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_WalesRiverFlooding_6, 0]);
var lyr_WalesSurfaceWaterFlooding_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://lle.gov.wales/services/wms/nrw",
    attributions: ' ',
                              params: {
                                "LAYERS": "inspire-nrw:NRW_FLOOD_RISK_FROM_SURFACE_WATER_SMALL_WATERCOURSES",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Wales Surface Water Flooding",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_WalesSurfaceWaterFlooding_7, 0]);
var format_RailwayLines_8 = new ol.format.GeoJSON();
var features_RailwayLines_8 = format_RailwayLines_8.readFeatures(json_RailwayLines_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayLines_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayLines_8.addFeatures(features_RailwayLines_8);
var lyr_RailwayLines_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RailwayLines_8, 
                style: style_RailwayLines_8,
                interactive: false,
                title: '<img src="styles/legend/RailwayLines_8.png" /> Railway Lines'
            });
var format_RailwayStations_9 = new ol.format.GeoJSON();
var features_RailwayStations_9 = format_RailwayStations_9.readFeatures(json_RailwayStations_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStations_9.addFeatures(features_RailwayStations_9);
var lyr_RailwayStations_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RailwayStations_9, 
                style: style_RailwayStations_9,
                interactive: false,
                title: '<img src="styles/legend/RailwayStations_9.png" /> Railway Stations'
            });
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,],
                                title: "Basemaps"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_EnglandRiverandSeaFlooding3_3.setVisible(true);lyr_EnglandRiverandSeaFlooding2_4.setVisible(true);lyr_WalesSeaFlooding_5.setVisible(true);lyr_WalesRiverFlooding_6.setVisible(true);lyr_WalesSurfaceWaterFlooding_7.setVisible(true);lyr_RailwayLines_8.setVisible(true);lyr_RailwayStations_9.setVisible(true);
var layersList = [group_Basemaps,lyr_EnglandRiverandSeaFlooding3_3,lyr_EnglandRiverandSeaFlooding2_4,lyr_WalesSeaFlooding_5,lyr_WalesRiverFlooding_6,lyr_WalesSurfaceWaterFlooding_7,lyr_RailwayLines_8,lyr_RailwayStations_9];
lyr_RailwayLines_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'covered': 'covered', 'bridge:wikipedia': 'bridge:wikipedia', 'bridge:structure': 'bridge:structure', 'construction:voltage': 'construction:voltage', 'construction:frequency': 'construction:frequency', 'construction:electrified': 'construction:electrified', '1': '1', 'heritage': 'heritage', 'level': 'level', 'maxspeed:forward': 'maxspeed:forward', 'maxspeed:backward': 'maxspeed:backward', 'tunnel:name': 'tunnel:name', 'lines': 'lines', 'cutting': 'cutting', 'access': 'access', 'bridge:ref': 'bridge:ref', 'embankment': 'embankment', 'railway:preserved': 'railway:preserved', 'bridge_ref': 'bridge_ref', 'freight': 'freight', 'alt_name': 'alt_name', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref:elr': 'ref:elr', 'old_ref': 'old_ref', 'bridge:name': 'bridge:name', 'tracks': 'tracks', 'bridge': 'bridge', 'service': 'service', 'railway:track_ref': 'railway:track_ref', 'description': 'description', 'detail': 'detail', 'passenger': 'passenger', 'ref:seq': 'ref:seq', 'ref:HCN': 'ref:HCN', 'operator': 'operator', 'name:en': 'name:en', 'name:cy': 'name:cy', 'alt_name:en': 'alt_name:en', 'tunnel': 'tunnel', 'layer': 'layer', 'start_date': 'start_date', 'maxspeed:tilting': 'maxspeed:tilting', 'highspeed': 'highspeed', 'voltage': 'voltage', 'passenger_lines': 'passenger_lines', 'frequency': 'frequency', 'name': 'name', 'usage': 'usage', 'ref:lor': 'ref:lor', 'ref': 'ref', 'maxspeed': 'maxspeed', 'loading_gauge': 'loading_gauge', 'gauge': 'gauge', 'electrified': 'electrified', });
lyr_RailwayStations_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'wikipedia:cy': 'wikipedia:cy', 'note:platforms': 'note:platforms', 'name:ko': 'name:ko', 'phone': 'phone', 'ref:nalco': 'ref:nalco', 'ref:STANOX': 'ref:STANOX', 'wheelchair:description': 'wheelchair:description', 'postal_code': 'postal_code', 'name:it': 'name:it', 'usage': 'usage', 'type': 'type', 'station': 'station', 'light_rail': 'light_rail', 'alt_name': 'alt_name', 'name:lt': 'name:lt', 'old_name': 'old_name', 'operator:en': 'operator:en', 'operator:cy': 'operator:cy', 'platforms': 'platforms', 'electrified': 'electrified', 'ref:tipoc': 'ref:tipoc', 'description': 'description', 'website': 'website', 'operator': 'operator', 'ref:tiploc': 'ref:tiploc', 'request_stop': 'request_stop', 'train': 'train', 'uic_ref': 'uic_ref', 'wheelchair': 'wheelchair', 'internet_access': 'internet_access', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'name:en': 'name:en', 'name:cy': 'name:cy', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref:crs': 'ref:crs', 'public_transport': 'public_transport', 'network': 'network', 'naptan:AtcoCode': 'naptan:AtcoCode', 'name': 'name', });
lyr_RailwayLines_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'covered': 'TextEdit', 'bridge:wikipedia': 'TextEdit', 'bridge:structure': 'TextEdit', 'construction:voltage': 'TextEdit', 'construction:frequency': 'TextEdit', 'construction:electrified': 'TextEdit', '1': 'TextEdit', 'heritage': 'TextEdit', 'level': 'TextEdit', 'maxspeed:forward': 'TextEdit', 'maxspeed:backward': 'TextEdit', 'tunnel:name': 'TextEdit', 'lines': 'TextEdit', 'cutting': 'TextEdit', 'access': 'TextEdit', 'bridge:ref': 'TextEdit', 'embankment': 'TextEdit', 'railway:preserved': 'TextEdit', 'bridge_ref': 'TextEdit', 'freight': 'TextEdit', 'alt_name': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref:elr': 'TextEdit', 'old_ref': 'TextEdit', 'bridge:name': 'TextEdit', 'tracks': 'TextEdit', 'bridge': 'TextEdit', 'service': 'TextEdit', 'railway:track_ref': 'TextEdit', 'description': 'TextEdit', 'detail': 'TextEdit', 'passenger': 'TextEdit', 'ref:seq': 'TextEdit', 'ref:HCN': 'TextEdit', 'operator': 'TextEdit', 'name:en': 'TextEdit', 'name:cy': 'TextEdit', 'alt_name:en': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'start_date': 'TextEdit', 'maxspeed:tilting': 'TextEdit', 'highspeed': 'TextEdit', 'voltage': 'TextEdit', 'passenger_lines': 'TextEdit', 'frequency': 'TextEdit', 'name': 'TextEdit', 'usage': 'TextEdit', 'ref:lor': 'TextEdit', 'ref': 'TextEdit', 'maxspeed': 'TextEdit', 'loading_gauge': 'TextEdit', 'gauge': 'TextEdit', 'electrified': 'TextEdit', });
lyr_RailwayStations_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'wikipedia:cy': 'TextEdit', 'note:platforms': 'TextEdit', 'name:ko': 'TextEdit', 'phone': 'TextEdit', 'ref:nalco': 'TextEdit', 'ref:STANOX': 'TextEdit', 'wheelchair:description': 'TextEdit', 'postal_code': 'TextEdit', 'name:it': 'TextEdit', 'usage': 'TextEdit', 'type': 'TextEdit', 'station': 'TextEdit', 'light_rail': 'TextEdit', 'alt_name': 'TextEdit', 'name:lt': 'TextEdit', 'old_name': 'TextEdit', 'operator:en': 'TextEdit', 'operator:cy': 'TextEdit', 'platforms': 'TextEdit', 'electrified': 'TextEdit', 'ref:tipoc': 'TextEdit', 'description': 'TextEdit', 'website': 'TextEdit', 'operator': 'TextEdit', 'ref:tiploc': 'TextEdit', 'request_stop': 'TextEdit', 'train': 'TextEdit', 'uic_ref': 'TextEdit', 'wheelchair': 'TextEdit', 'internet_access': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'name:en': 'TextEdit', 'name:cy': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref:crs': 'TextEdit', 'public_transport': 'TextEdit', 'network': 'TextEdit', 'naptan:AtcoCode': 'TextEdit', 'name': 'TextEdit', });
lyr_RailwayLines_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'covered': 'no label', 'bridge:wikipedia': 'no label', 'bridge:structure': 'no label', 'construction:voltage': 'no label', 'construction:frequency': 'no label', 'construction:electrified': 'no label', '1': 'no label', 'heritage': 'no label', 'level': 'no label', 'maxspeed:forward': 'no label', 'maxspeed:backward': 'no label', 'tunnel:name': 'no label', 'lines': 'no label', 'cutting': 'no label', 'access': 'no label', 'bridge:ref': 'no label', 'embankment': 'no label', 'railway:preserved': 'no label', 'bridge_ref': 'no label', 'freight': 'no label', 'alt_name': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref:elr': 'no label', 'old_ref': 'no label', 'bridge:name': 'no label', 'tracks': 'no label', 'bridge': 'no label', 'service': 'no label', 'railway:track_ref': 'no label', 'description': 'no label', 'detail': 'no label', 'passenger': 'no label', 'ref:seq': 'no label', 'ref:HCN': 'no label', 'operator': 'no label', 'name:en': 'no label', 'name:cy': 'no label', 'alt_name:en': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'start_date': 'no label', 'maxspeed:tilting': 'no label', 'highspeed': 'no label', 'voltage': 'no label', 'passenger_lines': 'no label', 'frequency': 'no label', 'name': 'no label', 'usage': 'no label', 'ref:lor': 'no label', 'ref': 'no label', 'maxspeed': 'no label', 'loading_gauge': 'no label', 'gauge': 'no label', 'electrified': 'no label', });
lyr_RailwayStations_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'wikipedia:cy': 'no label', 'note:platforms': 'no label', 'name:ko': 'no label', 'phone': 'no label', 'ref:nalco': 'no label', 'ref:STANOX': 'no label', 'wheelchair:description': 'no label', 'postal_code': 'no label', 'name:it': 'no label', 'usage': 'no label', 'type': 'no label', 'station': 'no label', 'light_rail': 'no label', 'alt_name': 'no label', 'name:lt': 'no label', 'old_name': 'no label', 'operator:en': 'no label', 'operator:cy': 'no label', 'platforms': 'no label', 'electrified': 'no label', 'ref:tipoc': 'no label', 'description': 'no label', 'website': 'no label', 'operator': 'no label', 'ref:tiploc': 'no label', 'request_stop': 'no label', 'train': 'no label', 'uic_ref': 'no label', 'wheelchair': 'no label', 'internet_access': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'name:en': 'no label', 'name:cy': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref:crs': 'no label', 'public_transport': 'no label', 'network': 'no label', 'naptan:AtcoCode': 'no label', 'name': 'no label', });
lyr_RailwayStations_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});