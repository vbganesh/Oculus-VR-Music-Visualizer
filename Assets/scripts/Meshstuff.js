#pragma strict

var newVertices : Vector3[];
var newUV : Vector2[];
var newTriangles : int[];

function Start () {
	Debug.Log("DFGDFGDFGDFG");
	var mesh : Mesh = new Mesh ();
	GetComponent(MeshFilter).mesh = mesh;
	mesh.vertices = newVertices;
	mesh.uv = newUV;
	mesh.triangles = newTriangles;
}

function Update () {
	var mesh : Mesh = GetComponent(MeshFilter).mesh;
	var vertices : Vector3[] = mesh.vertices;
	var normals : Vector3[] = mesh.normals;
	for (var i = 0; i < vertices.Length; i++)
		vertices[i] += normals[i] * Mathf.Sin(Time.time);
	mesh.vertices = vertices;
}