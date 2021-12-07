DROP TABLE IF EXISTS parks; 
DROP TABLE IF EXISTS animals; 
DROP TABLE IF EXISTS animal_locations;

CREATE TABLE parks (
	CODE VARCHAR (5),
	Place_Name VARCHAR (255),
	Latitude FLOAT, 
	Longitude FLOAT
);

COPY parks(Code, Place_Name, Latitude, Longitude)
FROM 'C:\Users\Zach\OneDrive\Documents\Uni\Monash\Project2-DataVisualisation\Resources\parkLocations.csv'
DELIMITER ','
CSV HEADER; 

SELECT * FROM parks;

CREATE TABLE animals (
	Code VARCHAR (5), 
	Place_Name VARCHAR (255),
	Category VARCHAR (255),
	Sort FLOAT, 
	OrderName VARCHAR (255),
	FamilyName VARCHAR (255),
	Taxon FLOAT, 
	TSN FLOAT, 
	TaxonRecordStatus VARCHAR (10),
	ScientificName VARCHAR (255),
	CommonNames VARCHAR (255),
	Synonyms VARCHAR (255),
	Occurrence VARCHAR (255)
);

COPY animals(Code, Place_Name, Category, Sort, OrderName, FamilyName, Taxon, TSN, TaxonRecordStatus, ScientificName, CommonNames, Synonyms, Occurrence)
FROM 'C:\Users\Zach\OneDrive\Documents\Uni\Monash\Project2-DataVisualisation\Resources\CombinedMammalsBirds.csv'
DELIMITER ','
CSV HEADER; 

SELECT * FROM animals; 


CREATE TABLE animal_locations (
	Code Varchar (5),
	Place_Name VARCHAR (255),
	ScientificName VARCHAR (255), 
	CommonNames VARCHAR (255), 
	Latitude FLOAT, 
	Longitude FLOAT
);

INSERT INTO animal_locations (Code, Place_Name, ScientificName, CommonNames, Latitude, Longitude)
SELECT pa.Code, pa.Place_Name, an.ScientificName, an.CommonNames, pa.Latitude, pa.Longitude
FROM parks pa
JOIN animals an ON pa.Code = an.Code;

SELECT * FROM animal_locations;