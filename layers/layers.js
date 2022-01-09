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
var format_RailwayStation_8 = new ol.format.GeoJSON();
var features_RailwayStation_8 = format_RailwayStation_8.readFeatures(json_RailwayStation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStation_8.addFeatures(features_RailwayStation_8);
var lyr_RailwayStation_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RailwayStation_8, 
                style: style_RailwayStation_8,
                interactive: false,
                title: '<img src="styles/legend/RailwayStation_8.png" /> Railway Station'
            });
var format_Railway_9 = new ol.format.GeoJSON();
var features_Railway_9 = format_Railway_9.readFeatures(json_Railway_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_9.addFeatures(features_Railway_9);
var lyr_Railway_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railway_9, 
                style: style_Railway_9,
                interactive: false,
                title: '<img src="styles/legend/Railway_9.png" /> Railway'
            });
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,],
                                title: "Basemaps"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_EnglandRiverandSeaFlooding3_3.setVisible(false);lyr_EnglandRiverandSeaFlooding2_4.setVisible(false);lyr_WalesSeaFlooding_5.setVisible(false);lyr_WalesRiverFlooding_6.setVisible(false);lyr_WalesSurfaceWaterFlooding_7.setVisible(false);lyr_RailwayStation_8.setVisible(true);lyr_Railway_9.setVisible(true);
var layersList = [group_Basemaps,lyr_EnglandRiverandSeaFlooding3_3,lyr_EnglandRiverandSeaFlooding2_4,lyr_WalesSeaFlooding_5,lyr_WalesRiverFlooding_6,lyr_WalesSurfaceWaterFlooding_7,lyr_RailwayStation_8,lyr_Railway_9];
lyr_RailwayStation_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'note:platforms': 'note:platforms', 'name:ko': 'name:ko', 'opening_hours': 'opening_hours', 'ref:nalco': 'ref:nalco', 'ref:STANOX': 'ref:STANOX', 'not:addr:postcode': 'not:addr:postcode', 'postal_code': 'postal_code', 'smoking': 'smoking', 'name:it': 'name:it', 'stop_on_demand': 'stop_on_demand', 'addr:housename': 'addr:housename', 'type': 'type', 'station': 'station', 'light_rail': 'light_rail', 'tourism': 'tourism', 'internet_access:fee': 'internet_access:fee', 'phone': 'phone', 'access': 'access', 'name:lt': 'name:lt', 'usage': 'usage', 'electrified': 'electrified', 'ref:tipoc': 'ref:tipoc', 'start_date': 'start_date', 'name:ru': 'name:ru', 'loc_name': 'loc_name', 'alt_name': 'alt_name', 'website': 'website', 'ref:tiploc': 'ref:tiploc', 'platforms': 'platforms', 'request_stop': 'request_stop', 'wikipedia:cy': 'wikipedia:cy', 'old_name': 'old_name', 'wheelchair:description': 'wheelchair:description', 'railway:etcs': 'railway:etcs', 'operator:en': 'operator:en', 'operator:cy': 'operator:cy', 'operator': 'operator', 'train': 'train', 'uic_ref': 'uic_ref', 'wheelchair': 'wheelchair', 'internet_access': 'internet_access', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'name:en': 'name:en', 'name:cy': 'name:cy', 'description': 'description', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref:crs': 'ref:crs', 'public_transport': 'public_transport', 'network': 'network', 'naptan:AtcoCode': 'naptan:AtcoCode', 'name': 'name', });
lyr_Railway_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'ford': 'ford', 'shelter': 'shelter', 'disused': 'disused', 'min_height': 'min_height', 'bridge:wikipedia': 'bridge:wikipedia', 'bridge:structure': 'bridge:structure', 'type': 'type', '1': '1', 'heritage': 'heritage', 'historic:tunnel': 'historic:tunnel', 'maxspeed:source': 'maxspeed:source', 'railway_bridge_ref': 'railway_bridge_ref', 'maxspeed:forward': 'maxspeed:forward', 'maxspeed:backward': 'maxspeed:backward', 'maxspeed:passenger': 'maxspeed:passenger', 'maxspeed:freight': 'maxspeed:freight', 'track_ref': 'track_ref', 'source:bridge': 'source:bridge', 'indoor': 'indoor', 'covered': 'covered', 'lines': 'lines', 'old_name': 'old_name', 'construction:voltage': 'construction:voltage', 'construction:frequency': 'construction:frequency', 'construction:electrified': 'construction:electrified', 'loading_gauge:maxwidth': 'loading_gauge:maxwidth', 'loading_gauge:maxheight': 'loading_gauge:maxheight', 'designation': 'designation', 'access': 'access', 'historic:ref:lor': 'historic:ref:lor', 'tunnel_name': 'tunnel_name', 'canal:bridge:ref': 'canal:bridge:ref', 'railway:preserved': 'railway:preserved', 'railway:bridge:ref': 'railway:bridge:ref', 'tunnel:name': 'tunnel:name', 'railway:traffic_mode': 'railway:traffic_mode', 'cutting': 'cutting', 'freight': 'freight', 'embankment': 'embankment', 'maxheight': 'maxheight', 'bridge_ref': 'bridge_ref', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'old_ref': 'old_ref', 'ref:elr': 'ref:elr', 'alt_name': 'alt_name', 'source:ref': 'source:ref', 'source:layout': 'source:layout', 'bridge:name': 'bridge:name', 'maxspeed:MU': 'maxspeed:MU', 'maxspeed:EPS': 'maxspeed:EPS', 'bridge:ref': 'bridge:ref', 'bridge': 'bridge', 'service': 'service', 'railway:track_ref': 'railway:track_ref', 'description': 'description', 'detail': 'detail', 'ref:seq': 'ref:seq', 'ref:HCN': 'ref:HCN', 'level': 'level', 'railway:etcs': 'railway:etcs', 'tracks': 'tracks', 'designated_direction': 'designated_direction', 'operator': 'operator', 'name:en': 'name:en', 'name:cy': 'name:cy', 'alt_name:en': 'alt_name:en', 'passenger': 'passenger', 'tunnel': 'tunnel', 'layer': 'layer', 'maxspeed:tilting': 'maxspeed:tilting', 'highspeed': 'highspeed', 'name': 'name', 'ref': 'ref', 'voltage': 'voltage', 'usage': 'usage', 'start_date': 'start_date', 'ref:lor': 'ref:lor', 'passenger_lines': 'passenger_lines', 'maxspeed': 'maxspeed', 'loading_gauge': 'loading_gauge', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', });
lyr_RailwayStation_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'note:platforms': 'TextEdit', 'name:ko': 'TextEdit', 'opening_hours': '', 'ref:nalco': 'TextEdit', 'ref:STANOX': 'TextEdit', 'not:addr:postcode': '', 'postal_code': 'TextEdit', 'smoking': '', 'name:it': 'TextEdit', 'stop_on_demand': '', 'addr:housename': '', 'type': 'TextEdit', 'station': 'TextEdit', 'light_rail': 'TextEdit', 'tourism': '', 'internet_access:fee': '', 'phone': 'TextEdit', 'access': '', 'name:lt': 'TextEdit', 'usage': 'TextEdit', 'electrified': 'TextEdit', 'ref:tipoc': 'TextEdit', 'start_date': '', 'name:ru': '', 'loc_name': '', 'alt_name': 'TextEdit', 'website': 'TextEdit', 'ref:tiploc': 'TextEdit', 'platforms': 'TextEdit', 'request_stop': 'TextEdit', 'wikipedia:cy': 'TextEdit', 'old_name': 'TextEdit', 'wheelchair:description': 'TextEdit', 'railway:etcs': '', 'operator:en': 'TextEdit', 'operator:cy': 'TextEdit', 'operator': 'TextEdit', 'train': 'TextEdit', 'uic_ref': 'TextEdit', 'wheelchair': 'TextEdit', 'internet_access': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'name:en': 'TextEdit', 'name:cy': 'TextEdit', 'description': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref:crs': 'TextEdit', 'public_transport': 'TextEdit', 'network': 'TextEdit', 'naptan:AtcoCode': 'TextEdit', 'name': 'TextEdit', });
lyr_Railway_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'ford': '', 'shelter': '', 'disused': '', 'min_height': '', 'bridge:wikipedia': 'TextEdit', 'bridge:structure': 'TextEdit', 'type': '', '1': 'TextEdit', 'heritage': 'TextEdit', 'historic:tunnel': '', 'maxspeed:source': '', 'railway_bridge_ref': '', 'maxspeed:forward': 'TextEdit', 'maxspeed:backward': 'TextEdit', 'maxspeed:passenger': '', 'maxspeed:freight': '', 'track_ref': '', 'source:bridge': '', 'indoor': '', 'covered': 'TextEdit', 'lines': 'TextEdit', 'old_name': '', 'construction:voltage': 'TextEdit', 'construction:frequency': 'TextEdit', 'construction:electrified': 'TextEdit', 'loading_gauge:maxwidth': '', 'loading_gauge:maxheight': '', 'designation': '', 'access': 'TextEdit', 'historic:ref:lor': '', 'tunnel_name': '', 'canal:bridge:ref': '', 'railway:preserved': 'TextEdit', 'railway:bridge:ref': '', 'tunnel:name': 'TextEdit', 'railway:traffic_mode': '', 'cutting': 'TextEdit', 'freight': 'TextEdit', 'embankment': 'TextEdit', 'maxheight': '', 'bridge_ref': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'old_ref': 'TextEdit', 'ref:elr': 'TextEdit', 'alt_name': 'TextEdit', 'source:ref': '', 'source:layout': '', 'bridge:name': 'TextEdit', 'maxspeed:MU': '', 'maxspeed:EPS': '', 'bridge:ref': 'TextEdit', 'bridge': 'TextEdit', 'service': 'TextEdit', 'railway:track_ref': 'TextEdit', 'description': 'TextEdit', 'detail': 'TextEdit', 'ref:seq': 'TextEdit', 'ref:HCN': 'TextEdit', 'level': 'TextEdit', 'railway:etcs': '', 'tracks': 'TextEdit', 'designated_direction': '', 'operator': 'TextEdit', 'name:en': 'TextEdit', 'name:cy': 'TextEdit', 'alt_name:en': 'TextEdit', 'passenger': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'maxspeed:tilting': 'TextEdit', 'highspeed': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'voltage': 'TextEdit', 'usage': 'TextEdit', 'start_date': 'TextEdit', 'ref:lor': 'TextEdit', 'passenger_lines': 'TextEdit', 'maxspeed': 'TextEdit', 'loading_gauge': 'TextEdit', 'gauge': 'TextEdit', 'frequency': 'TextEdit', 'electrified': 'TextEdit', });
lyr_RailwayStation_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'note:platforms': 'no label', 'name:ko': 'no label', 'opening_hours': 'no label', 'ref:nalco': 'no label', 'ref:STANOX': 'no label', 'not:addr:postcode': 'no label', 'postal_code': 'no label', 'smoking': 'no label', 'name:it': 'no label', 'stop_on_demand': 'no label', 'addr:housename': 'no label', 'type': 'no label', 'station': 'no label', 'light_rail': 'no label', 'tourism': 'no label', 'internet_access:fee': 'no label', 'phone': 'no label', 'access': 'no label', 'name:lt': 'no label', 'usage': 'no label', 'electrified': 'no label', 'ref:tipoc': 'no label', 'start_date': 'no label', 'name:ru': 'no label', 'loc_name': 'no label', 'alt_name': 'no label', 'website': 'no label', 'ref:tiploc': 'no label', 'platforms': 'no label', 'request_stop': 'no label', 'wikipedia:cy': 'no label', 'old_name': 'no label', 'wheelchair:description': 'no label', 'railway:etcs': 'no label', 'operator:en': 'no label', 'operator:cy': 'no label', 'operator': 'no label', 'train': 'no label', 'uic_ref': 'no label', 'wheelchair': 'no label', 'internet_access': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'name:en': 'no label', 'name:cy': 'no label', 'description': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref:crs': 'no label', 'public_transport': 'no label', 'network': 'no label', 'naptan:AtcoCode': 'no label', 'name': 'no label', });
lyr_Railway_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'ford': 'no label', 'shelter': 'no label', 'disused': 'no label', 'min_height': 'no label', 'bridge:wikipedia': 'no label', 'bridge:structure': 'no label', 'type': 'no label', '1': 'no label', 'heritage': 'no label', 'historic:tunnel': 'no label', 'maxspeed:source': 'no label', 'railway_bridge_ref': 'no label', 'maxspeed:forward': 'no label', 'maxspeed:backward': 'no label', 'maxspeed:passenger': 'no label', 'maxspeed:freight': 'no label', 'track_ref': 'no label', 'source:bridge': 'no label', 'indoor': 'no label', 'covered': 'no label', 'lines': 'no label', 'old_name': 'no label', 'construction:voltage': 'no label', 'construction:frequency': 'no label', 'construction:electrified': 'no label', 'loading_gauge:maxwidth': 'no label', 'loading_gauge:maxheight': 'no label', 'designation': 'no label', 'access': 'no label', 'historic:ref:lor': 'no label', 'tunnel_name': 'no label', 'canal:bridge:ref': 'no label', 'railway:preserved': 'no label', 'railway:bridge:ref': 'no label', 'tunnel:name': 'no label', 'railway:traffic_mode': 'no label', 'cutting': 'no label', 'freight': 'no label', 'embankment': 'no label', 'maxheight': 'no label', 'bridge_ref': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'old_ref': 'no label', 'ref:elr': 'no label', 'alt_name': 'no label', 'source:ref': 'no label', 'source:layout': 'no label', 'bridge:name': 'no label', 'maxspeed:MU': 'no label', 'maxspeed:EPS': 'no label', 'bridge:ref': 'no label', 'bridge': 'no label', 'service': 'no label', 'railway:track_ref': 'no label', 'description': 'no label', 'detail': 'no label', 'ref:seq': 'no label', 'ref:HCN': 'no label', 'level': 'no label', 'railway:etcs': 'no label', 'tracks': 'no label', 'designated_direction': 'no label', 'operator': 'no label', 'name:en': 'no label', 'name:cy': 'no label', 'alt_name:en': 'no label', 'passenger': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'maxspeed:tilting': 'no label', 'highspeed': 'no label', 'name': 'no label', 'ref': 'no label', 'voltage': 'no label', 'usage': 'no label', 'start_date': 'no label', 'ref:lor': 'no label', 'passenger_lines': 'no label', 'maxspeed': 'no label', 'loading_gauge': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', });
lyr_Railway_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});