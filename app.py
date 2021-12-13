from flask import Flask
from flask import render_template
import psycopg2

app = Flask(__name__)
#connect to db
db_conn = psycopg2.connect("dbname=postgres port=5432 user=postgres password=tiki")
db_cursor = db_conn.cursor()
#app = Flask(__name__, template_folder='../templates')
app = Flask(__name__)
app.debug = True

@app.route("/")
def get_index():
    print("in get cusrsor function")
    # pass updated list for rendering
    return render_template("index.html")

@app.route("/parks")
def get_parks():
    print("in get cusrsor function")
    db_cursor.execute("select * from park")
    result = db_cursor.fetchall()

    ## the park count starts with zero. in order to increment it first convert tuple to list
    result2 = list(map(list, result))
    pasksList= []
    ## increment the count by 1
    for i in range(len(result2)) : 
        temp = {}
        temp_loc = []
        
        temp['name'] = result2[i][1]
        
        temp_loc.append(result2[i][2])
        temp_loc.append(result2[i][3])
        
        temp['location'] = temp_loc

        pasksList.append(temp)

    print(pasksList) 


    # for i in range(len(result2)) : 
    #     temp = {}
    #     temp['name'] = 
    #     for j in range(len(result2[i])) : 
    #         if j == 0:
    #             result2[i][j] = result2[i][j] + 1
    #         print(result2[i][j], end=" ")
    #     print() 


    # pass updated list for rendering
    return render_template("parks.html", parks=pasksList)    
   
# Close the database cursor and connection

if __name__ == '__main__':
    app.run(debug=True)