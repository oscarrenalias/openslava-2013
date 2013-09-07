var object = {
	"field1": "some value",
	"field2": {
		"sub_field1": "more value",
		"sub_field2": 123
	}
}

// To JSON
var jsonData = JSON.stringify(object);

// And back
var deserializedObject = JSON.parse(jsonData);