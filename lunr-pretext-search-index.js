var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "agexamples-3",
  "level": "1",
  "url": "agexamples-3.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Blake Farman Mathematics & Statistics Louisiana Tech University       "
},
{
  "id": "visualizing_varieties",
  "level": "1",
  "url": "visualizing_varieties.html",
  "type": "Section",
  "number": "1",
  "title": "Visualizing Varieties",
  "body": " Visualizing Varieties   These are some basic varieties that we can visualize over . The SageMath code below can be reused with the appropriate modifications to visualize other varieties, provided that they live an affine space of dimension at most 3.    Basic Curves    Sketch the variety defined by the polynomial equation .    In Sage, we can visualize equations in affine 2-space using the implicit_plot function. By default, Sage knows to treat x as a variable. If you want to use other variables, you will need to declare them using the command var('var_name_1, var_name_2, ...') . The function implicit_plot expects, at a minimum, the following arguments:  An equation of the form expression_1 == expression_2 . Sage interprets a single expression as expression == 0 .  For each variable, a range of allowable values expressed as a triple (var_name, min_value, max_value) .     There are several other optional parameters. You can find documentation on these parameters using the ? operator as below. This will work for any Sage function, although the helpfulness depends on how well the function was documented by the author.       Sketch the variety defined by the polynomial equation .    Note that we can separate the variables in this equation to see that this is just the rational function We could use implicit_plot to visualize the variety directly, but we can also use the simpler plot function.       Surfaces  For the basic curves above, Sage is overkill. However, it is quite handy for surfaces. The main tool we will need is implicit_plot3d , which works essentially the same way, but allows expressions with up to three variables. We will utilize the variables x , y , and z using var('x,y,z') , but there's nothing particularly special about these naems.    Sketch the variety defined by the poylnomial equation .         Sketch the variety defined by the polynomial equation .         Sketch the variety defined by .    If you're following along in the book, you'll likely notice that the result of the following command doesn't quite match the picture in the text.   The reason for this is is not smooth. In particular, we can see the gradient vanishes along the -axis, which is where most of the funny business happens.   We can fix some of this using parameterization. From the text, we have the parameterization The following sage code plots this parameterization using the parametric_plot3d function. The colormap feature here is unnecessary, but provides a nice visualization of the grandient on the surface: the gradient is normalized to the interval , with red assigned to 0, and blue assigned to 1. The deepeer the shade, the closer to normalized gradient value is to the boundary of    Note that the parameterized version makes it easy to see that the vanishing of the gradient is happening where the surface pinches together. This is an example of singular locus we will encounter singularities later.      The Twisted Cubic  In affine two-space, a single equation defines a curve, which is intuitively a one-dimensional object. In three-space, a single polynomial equation defines a surface, which is intuitively a two-dimensional object. To obtain a curve in three-space, we will need at least two equations. Geometrically, this means curves are obtained by intersecting surfaces.  One particularly interesting curve is called the twisted cubic . This curve is obtained by intersecting a parabolic cylinder with a cubic cylinder: . Since this variety is defined to be the points satisfying , we can easily parameterize this curve using This allows us to plot the curve using the parametric_plot3d function. We can visualize the construction of the twisted cubic as an intersection by plotting the two surfaces and along with the twisted cubic. Note that the + operator in Sage is overloaded to allow addition of plots, which means simply display the summed plots in the same window.   Note also the usage of \\ and a carriage return to help minimize horizontal spread. It is important to ensure that no whitespace is added after the slash, as this will generate the error message SyntaxError: unexpected character after line continuation character , as below.    "
},
{
  "id": "visualizing_curves-2",
  "level": "2",
  "url": "visualizing_varieties.html#visualizing_curves-2",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": "  Sketch the variety defined by the polynomial equation .    In Sage, we can visualize equations in affine 2-space using the implicit_plot function. By default, Sage knows to treat x as a variable. If you want to use other variables, you will need to declare them using the command var('var_name_1, var_name_2, ...') . The function implicit_plot expects, at a minimum, the following arguments:  An equation of the form expression_1 == expression_2 . Sage interprets a single expression as expression == 0 .  For each variable, a range of allowable values expressed as a triple (var_name, min_value, max_value) .     There are several other optional parameters. You can find documentation on these parameters using the ? operator as below. This will work for any Sage function, although the helpfulness depends on how well the function was documented by the author.    "
},
{
  "id": "visualizing_curves-3",
  "level": "2",
  "url": "visualizing_varieties.html#visualizing_curves-3",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": "  Sketch the variety defined by the polynomial equation .    Note that we can separate the variables in this equation to see that this is just the rational function We could use implicit_plot to visualize the variety directly, but we can also use the simpler plot function.    "
},
{
  "id": "visualizing_surfaces-3",
  "level": "2",
  "url": "visualizing_varieties.html#visualizing_surfaces-3",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "  Sketch the variety defined by the poylnomial equation .      "
},
{
  "id": "visualizing_surfaces-4",
  "level": "2",
  "url": "visualizing_varieties.html#visualizing_surfaces-4",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "  Sketch the variety defined by the polynomial equation .      "
},
{
  "id": "visualizing_surfaces-5",
  "level": "2",
  "url": "visualizing_varieties.html#visualizing_surfaces-5",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": "  Sketch the variety defined by .    If you're following along in the book, you'll likely notice that the result of the following command doesn't quite match the picture in the text.   The reason for this is is not smooth. In particular, we can see the gradient vanishes along the -axis, which is where most of the funny business happens.   We can fix some of this using parameterization. From the text, we have the parameterization The following sage code plots this parameterization using the parametric_plot3d function. The colormap feature here is unnecessary, but provides a nice visualization of the grandient on the surface: the gradient is normalized to the interval , with red assigned to 0, and blue assigned to 1. The deepeer the shade, the closer to normalized gradient value is to the boundary of    Note that the parameterized version makes it easy to see that the vanishing of the gradient is happening where the surface pinches together. This is an example of singular locus we will encounter singularities later.   "
},
{
  "id": "division_and_gcd",
  "level": "1",
  "url": "division_and_gcd.html",
  "type": "Section",
  "number": "2",
  "title": "Polynomials of a Single Variable",
  "body": " Polynomials of a Single Variable   Constructing Rings and Fields  Below are some basic examples of how to use some of the fields and rings available to you in Sage. Most of our computations will happen over , but Sage implements all the sets , , , , and , which are accessed by doubling the letter, as below.   Both RR and CC using 53 bit precision, so working over either field is often quite messy. Unless your polynomial has transcendental coefficients (  , , etc.), the algebraic closure of , QQbar , will do everything you might want from RR or CC with fewer decimals.   If you know a some Field\/Galois theory, Sage is also capable of constructing and working over number fields ( fields with ). As a simple example, we can adjoin the sixth roots of unity the complex solutions to to the field using the NumberField constructor. Note that you need at least two different variables here. We use x to specify the variable for the defining polynomial and zeta for the primitive sixth root of unity.     Polynomial Rings  We can form polynomial rings using the construction Name.<var_1, ..., var_n> = PolynomialRing(Ring) , where Ring is some ring object from Sage (Note: Remember that fields are also rings) and Name is a name of your choosing for the polynomial ring,  (for ring).   If for some reason you need to work over a number field, you'll need to either unbind the variable x or add in a third variable to get polynomials over the number field. For example, we can see that adjoing any primitive sixth root of unity, the polynomial splits completely:   Notice that we can ask for a factorization over with less labor, but the roots become more complicated. This is one particular advantage to working over the number field instead of the algebraic closure.         The Division Algorithm  For univariate polynomial rings, Sage implements the division algorithm through the function quo_rem .     The Euclidean Algorithm  Sage implements the Euclidean algorithm through the function gcd . This function accepts a pair of input values or a list of input values.    "
},
{
  "id": "division_and_gcd-3-8",
  "level": "2",
  "url": "division_and_gcd.html#division_and_gcd-3-8",
  "type": "Example",
  "number": "2.1",
  "title": "",
  "body": "   "
},
{
  "id": "monomial_orders_and_division",
  "level": "1",
  "url": "monomial_orders_and_division.html",
  "type": "Section",
  "number": "3",
  "title": "Monomial Orders and Division",
  "body": " Monomial Orders and Division   These are some examples of various monomial orderings with Sage, and an implementation of the division algorithm for multivariate polynomial rings (p. 65 of the text).    Monomial Orders  The point of monomial orders is to export computations from univariate polynomial rings to analogous computations for multivariate polynomial rings. In SageMath, monomial orders are called term orders , and several are implemented in the main libraries. For our purposes, we will primarily be concerned with SageMath's lex , deglex (graded lex), and degrevlex (graded reverse lex order).   The default monomoial order in SageMath is degrevlex .     The monomial ordering is passed as a named argument to the PolynomialRing constructor and is bound to the polynoial ring. Note that PolynomialRing is immutable once constructed, so you will have to simply re-construct a polynomial ring if you wish to change the term order.         Multivariate Division Algorithm  Below is an implementation of the division algorithm. In order to use this function in other cells on the page, you need to click the Evaluate (Sage) button.      Using lex order, divide the polynomial by and .       Using lex order, divide the polynomial by the polynomials and .       Using lex order, divide the polynomial by the polynomials and .      Note that and imply that the ordering of the -tuple matters when dividing a polynomial by .     Using lex order, divide the polynomial by the polynomials and . Then divide by and        Note that implies the membership problem for multivariate polynomials rings is more subtle than for univariate polynomial rings! In , we saw that every ideal is generated by some . Hence for all , .  The analogous statement for multivariate polynomials rings is the following. Let be a finitely generated ideal. For all , if and only if the ordered -tuple divides , the remainder on division of by is zero. It is clear that if the remainder on division of by is zero, then . However, the converse is false .  Changing the order of the generators does not change the ideal, so . The second computation above shows us that , even though the reaminder on division by is not zero. This suggests a need to develop more sophisticated machinery to answer the multivariate ideal membership problem.    "
},
{
  "id": "monomial_orders-3",
  "level": "2",
  "url": "monomial_orders_and_division.html#monomial_orders-3",
  "type": "Remark",
  "number": "3.1",
  "title": "",
  "body": " The default monomoial order in SageMath is degrevlex .  "
},
{
  "id": "monomial_orders-4",
  "level": "2",
  "url": "monomial_orders_and_division.html#monomial_orders-4",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": "  The monomial ordering is passed as a named argument to the PolynomialRing constructor and is bound to the polynoial ring. Note that PolynomialRing is immutable once constructed, so you will have to simply re-construct a polynomial ring if you wish to change the term order.      "
},
{
  "id": "multivariate_division_algorithm-4",
  "level": "2",
  "url": "monomial_orders_and_division.html#multivariate_division_algorithm-4",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": "  Using lex order, divide the polynomial by and .    "
},
{
  "id": "example-2_3_2",
  "level": "2",
  "url": "monomial_orders_and_division.html#example-2_3_2",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": "  Using lex order, divide the polynomial by the polynomials and .    "
},
{
  "id": "example-2_3_4",
  "level": "2",
  "url": "monomial_orders_and_division.html#example-2_3_4",
  "type": "Example",
  "number": "3.5",
  "title": "",
  "body": "  Using lex order, divide the polynomial by the polynomials and .    "
},
{
  "id": "multivariate_division_algorithm-7",
  "level": "2",
  "url": "monomial_orders_and_division.html#multivariate_division_algorithm-7",
  "type": "Remark",
  "number": "3.6",
  "title": "",
  "body": " Note that and imply that the ordering of the -tuple matters when dividing a polynomial by .  "
},
{
  "id": "example-2_3_5",
  "level": "2",
  "url": "monomial_orders_and_division.html#example-2_3_5",
  "type": "Example",
  "number": "3.7",
  "title": "",
  "body": "  Using lex order, divide the polynomial by the polynomials and . Then divide by and      "
},
{
  "id": "multivariate_division_algorithm-9",
  "level": "2",
  "url": "monomial_orders_and_division.html#multivariate_division_algorithm-9",
  "type": "Remark",
  "number": "3.8",
  "title": "",
  "body": " Note that implies the membership problem for multivariate polynomials rings is more subtle than for univariate polynomial rings! In , we saw that every ideal is generated by some . Hence for all , .  The analogous statement for multivariate polynomials rings is the following. Let be a finitely generated ideal. For all , if and only if the ordered -tuple divides , the remainder on division of by is zero. It is clear that if the remainder on division of by is zero, then . However, the converse is false .  Changing the order of the generators does not change the ideal, so . The second computation above shows us that , even though the reaminder on division by is not zero. This suggests a need to develop more sophisticated machinery to answer the multivariate ideal membership problem.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
