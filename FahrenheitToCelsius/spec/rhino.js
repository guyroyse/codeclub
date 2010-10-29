
load('./spec/lib/jspec.js')
load('./spec/lib/jspec.xhr.js')
load('src/f2c.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', disableColors: 'disableColors' })
.report()