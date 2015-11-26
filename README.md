# T-Gen

Dynamically Create Bootstrap Tables from JSON String with fields corresponding to a map.

## Requirements

* Bootstrap 3+
* JQuery

## Usage

* Create a map between column names and the fields in the JSON String

```js
var json_map = {
	"size" : "tshirt_size",
	"tgiven" : "tshirt_given",
	"fgiven" : "fcard_given",
	"egiven" : "extra_given"
}
```

* Make sure that the JSON String is an array of JSON Objects.

* Call the function with the parent JQuery object

```js
tGen($("#parent1"),jsonString, json_map);
```

* If you want the id of the row to be the value of a field from the JSONobj, Just pass the key as a paramter

```js
tGen($("#parent1"),jsonString, json_map, idKey);
```

* See `example/seeder_script.js` for usage and more details.

:copyright: 2015 Gokul Srinivas