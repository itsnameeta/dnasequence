DROP TABLE IF EXISTS parks; 

CREATE TABLE parks (
	Place_Name VARCHAR (255) PRIMARY KEY,
	Latitude FLOAT, 
	Longitude FLOAT
);

COPY parks(Place_Name, Latitude, Longitude)
FROM 'C:\Users\Zach\OneDrive\Documents\Uni\Monash\Project2-DataVisualisation\Resources\parkLocations.csv'
DELIMITER ','
CSV HEADER; 

SELECT * FROM parks;