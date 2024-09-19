(function() {
    var implementors = Object.fromEntries([["polars_core",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'_&gt;&gt; for <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'_&gt;&gt; for <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/time/struct.NaiveTime.html\" title=\"struct chrono::naive::time::NaiveTime\">NaiveTime</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.ArrowDataType.html\" title=\"enum polars_core::datatypes::ArrowDataType\">ArrowDataType</a>&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.ArrowTimeUnit.html\" title=\"enum polars_core::datatypes::ArrowTimeUnit\">TimeUnit</a>&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.TimeUnit.html\" title=\"enum polars_core::datatypes::TimeUnit\">TimeUnit</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"polars_core/chunked_array/ops/sort/options/struct.SortMultipleOptions.html\" title=\"struct polars_core::chunked_array::ops::sort::options::SortMultipleOptions\">SortMultipleOptions</a>&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/ops/sort/options/struct.SortOptions.html\" title=\"struct polars_core::chunked_array::ops::sort::options::SortOptions\">SortOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"polars_core/chunked_array/ops/sort/options/struct.SortOptions.html\" title=\"struct polars_core::chunked_array::ops::sort::options::SortOptions\">SortOptions</a>&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/ops/sort/options/struct.SortMultipleOptions.html\" title=\"struct polars_core::chunked_array::ops::sort::options::SortMultipleOptions\">SortMultipleOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"polars_core/frame/row/struct.Row.html\" title=\"struct polars_core::frame::row::Row\">Row</a>&lt;'_&gt;&gt; for <a class=\"type\" href=\"polars_core/schema/type.Schema.html\" title=\"type polars_core::schema::Schema\">Schema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"polars_core/prelude/struct.ArrowField.html\" title=\"struct polars_core::prelude::ArrowField\">Field</a>&gt; for <a class=\"struct\" href=\"polars_core/datatypes/struct.Field.html\" title=\"struct polars_core::datatypes::Field\">Field</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)&gt; for <a class=\"enum\" href=\"polars_core/frame/row/enum.AnyValueBuffer.html\" title=\"enum polars_core::frame::row::AnyValueBuffer\">AnyValueBuffer</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)&gt; for <a class=\"enum\" href=\"polars_core/frame/row/enum.AnyValueBufferTrusted.html\" title=\"enum polars_core::frame::row::AnyValueBufferTrusted\">AnyValueBufferTrusted</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"polars_core/chunked_array/cast/enum.CastOptions.html\" title=\"enum polars_core::chunked_array::cast::CastOptions\">CastOptions</a>&gt; for CastOptionsImpl"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'_&gt;&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'static&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"polars_utils/idx_vec/struct.UnitVec.html\" title=\"struct polars_utils::idx_vec::UnitVec\">UnitVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;)&gt;&gt; for <a class=\"struct\" href=\"polars_core/frame/group_by/struct.GroupsIdx.html\" title=\"struct polars_core::frame::group_by::GroupsIdx\">GroupsIdx</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"polars_utils/idx_vec/struct.UnitVec.html\" title=\"struct polars_utils::idx_vec::UnitVec\">UnitVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt;)&gt;&gt; for <a class=\"struct\" href=\"polars_core/frame/group_by/struct.GroupsIdx.html\" title=\"struct polars_core::frame::group_by::GroupsIdx\">GroupsIdx</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"polars_utils/idx_vec/struct.UnitVec.html\" title=\"struct polars_utils::idx_vec::UnitVec\">UnitVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;)&gt;&gt;&gt; for <a class=\"struct\" href=\"polars_core/frame/group_by/struct.GroupsIdx.html\" title=\"struct polars_core::frame::group_by::GroupsIdx\">GroupsIdx</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;<a class=\"struct\" href=\"polars_core/datatypes/struct.BooleanType.html\" title=\"struct polars_core::datatypes::BooleanType\">BooleanType</a>&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;<a class=\"struct\" href=\"polars_core/datatypes/struct.StringType.html\" title=\"struct polars_core::datatypes::StringType\">StringType</a>&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/datatypes/struct.Field.html\" title=\"struct polars_core::datatypes::Field\">Field</a>&gt; for (<a class=\"struct\" href=\"polars_core/prelude/struct.PlSmallStr.html\" title=\"struct polars_core::prelude::PlSmallStr\">PlSmallStr</a>, <a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a>)"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/frame/column/struct.ScalarColumn.html\" title=\"struct polars_core::frame::column::ScalarColumn\">ScalarColumn</a>&gt; for <a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/frame/group_by/struct.GroupsIdx.html\" title=\"struct polars_core::frame::group_by::GroupsIdx\">GroupsIdx</a>&gt; for <a class=\"enum\" href=\"polars_core/frame/group_by/enum.GroupsProxy.html\" title=\"enum polars_core::frame::group_by::GroupsProxy\">GroupsProxy</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/frame/struct.DataFrame.html\" title=\"struct polars_core::frame::DataFrame\">DataFrame</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>&gt; for <a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/utils/struct.SuperTypeFlags.html\" title=\"struct polars_core::utils::SuperTypeFlags\">SuperTypeFlags</a>&gt; for <a class=\"struct\" href=\"polars_core/utils/struct.SuperTypeOptions.html\" title=\"struct polars_core::utils::SuperTypeOptions\">SuperTypeOptions</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"polars_core/datatypes/struct.Field.html\" title=\"struct polars_core::datatypes::Field\">Field</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T::<a class=\"associatedtype\" href=\"polars_core/datatypes/trait.PolarsDataType.html#associatedtype.Physical\" title=\"type polars_core::datatypes::PolarsDataType::Physical\">Physical</a>&lt;'a&gt;&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>,</div>"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'a&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'a&gt;&gt;,</div>"],["impl&lt;K: <a class=\"trait\" href=\"polars_core/datatypes/trait.NumericNative.html\" title=\"trait polars_core::datatypes::NumericNative\">NumericNative</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;K&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'static&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>,\n    <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;: <a class=\"trait\" href=\"polars_core/series/trait.IntoSeries.html\" title=\"trait polars_core::series::IntoSeries\">IntoSeries</a>,</div>"],["impl&lt;T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;A&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&lt;Array = A&gt;,\n    A: Array,</div>"],["impl&lt;T: <a class=\"trait\" href=\"polars_core/chunked_array/object/trait.PolarsObject.html\" title=\"trait polars_core::chunked_array::object::PolarsObject\">PolarsObject</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/object/struct.ObjectArray.html\" title=\"struct polars_core::chunked_array::object::ObjectArray\">ObjectArray</a>&lt;T&gt;"]]],["polars_io",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"polars_io/csv/read/enum.CommentPrefix.html\" title=\"enum polars_io::csv::read::CommentPrefix\">CommentPrefix</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"polars_io/ipc/enum.IpcCompression.html\" title=\"enum polars_io::ipc::IpcCompression\">IpcCompression</a>&gt; for Compression"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"polars_io/parquet/write/enum.ParquetCompression.html\" title=\"enum polars_io::parquet::write::ParquetCompression\">ParquetCompression</a>&gt; for CompressionOptions"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_io/utils/byte_source/struct.MemSliceByteSource.html\" title=\"struct polars_io::utils::byte_source::MemSliceByteSource\">MemSliceByteSource</a>&gt; for <a class=\"enum\" href=\"polars_io/utils/byte_source/enum.DynByteSource.html\" title=\"enum polars_io::utils::byte_source::DynByteSource\">DynByteSource</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_io/utils/byte_source/struct.ObjectStoreByteSource.html\" title=\"struct polars_io::utils::byte_source::ObjectStoreByteSource\">ObjectStoreByteSource</a>&gt; for <a class=\"enum\" href=\"polars_io/utils/byte_source/enum.DynByteSource.html\" title=\"enum polars_io::utils::byte_source::DynByteSource\">DynByteSource</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_utils/mmap/private/struct.MemSlice.html\" title=\"struct polars_utils::mmap::private::MemSlice\">MemSlice</a>&gt; for <a class=\"enum\" href=\"polars_io/utils/byte_source/enum.DynByteSource.html\" title=\"enum polars_io::utils::byte_source::DynByteSource\">DynByteSource</a>"],["impl&lt;'a, T: 'a + <a class=\"trait\" href=\"polars_io/mmap/trait.MmapBytesReader.html\" title=\"trait polars_io::mmap::MmapBytesReader\">MmapBytesReader</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a mut T</a>&gt; for <a class=\"enum\" href=\"polars_io/mmap/enum.ReaderBytes.html\" title=\"enum polars_io::mmap::ReaderBytes\">ReaderBytes</a>&lt;'a&gt;"]]],["polars_lazy",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"polars_lazy/prelude/enum.DslPlan.html\" title=\"enum polars_lazy::prelude::DslPlan\">DslPlan</a>&gt; for <a class=\"struct\" href=\"polars_lazy/frame/struct.LazyFrame.html\" title=\"struct polars_lazy::frame::LazyFrame\">LazyFrame</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_lazy/frame/struct.LazyGroupBy.html\" title=\"struct polars_lazy::frame::LazyGroupBy\">LazyGroupBy</a>&gt; for <a class=\"struct\" href=\"polars_lazy/frame/struct.LazyFrame.html\" title=\"struct polars_lazy::frame::LazyFrame\">LazyFrame</a>"]]],["polars_ops",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"polars_ops/frame/join/enum.JoinType.html\" title=\"enum polars_ops::frame::join::JoinType\">JoinType</a>&gt; for <a class=\"struct\" href=\"polars_ops/frame/join/struct.JoinArgs.html\" title=\"struct polars_ops::frame::join::JoinArgs\">JoinArgs</a>"]]],["polars_utils",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"polars_utils/pl_str/struct.PlSmallStr.html\" title=\"struct polars_utils::pl_str::PlSmallStr\">PlSmallStr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"polars_utils/pl_str/struct.PlSmallStr.html\" title=\"struct polars_utils::pl_str::PlSmallStr\">PlSmallStr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"polars_utils/index/struct.NullableIdxSize.html\" title=\"struct polars_utils::index::NullableIdxSize\">NullableIdxSize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"polars_utils/pl_str/struct.PlSmallStr.html\" title=\"struct polars_utils::pl_str::PlSmallStr\">PlSmallStr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polars_utils/mmap/struct.MemSlice.html\" title=\"struct polars_utils::mmap::MemSlice\">MemSlice</a>&gt; for <a class=\"struct\" href=\"polars_utils/mmap/struct.MemReader.html\" title=\"struct polars_utils::mmap::MemReader\">MemReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;CompactString&gt; for <a class=\"struct\" href=\"polars_utils/pl_str/struct.PlSmallStr.html\" title=\"struct polars_utils::pl_str::PlSmallStr\">PlSmallStr</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a>&gt; for <a class=\"struct\" href=\"polars_utils/sync/struct.SyncPtr.html\" title=\"struct polars_utils::sync::SyncPtr\">SyncPtr</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"polars_utils/idx_vec/struct.UnitVec.html\" title=\"struct polars_utils::idx_vec::UnitVec\">UnitVec</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"polars_utils/cell/struct.SyncUnsafeCell.html\" title=\"struct polars_utils::cell::SyncUnsafeCell\">SyncUnsafeCell</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"polars_utils/idx_vec/struct.UnitVec.html\" title=\"struct polars_utils::idx_vec::UnitVec\">UnitVec</a>&lt;T&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[23774,3060,848,439,4130]}