import html
def test_escape():
    assert html.escape('This is a test') == 'This is a test'
    assert html.escape('This & that') == 'This &amp; that'
    assert html.escape('<tag>') == '&lt;tag&gt;'
    assert html.escape('"quote"') == '&quot;quote&quot;'
    assert html.escape("It's a test") == 'It&#x27;s a test'