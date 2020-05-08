@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row main-wrap">
        <div class="col-1 no-gutters">
            <navbar active="dashboard"></navbar>
        </div>
        <div class="col-10 pt-5">
            <audio-extractor></audio-extractor>
            <div class="row mt-4">
                <div class="col-8 py-3">
                    <new-project></new-project>
                </div>
                <div class="col-4 py-3">
                    <div class="form-group search-wrap">
                        <input type="url" class="form-control search-input" name="search-input" id="search-input"
                            placeholder="search" />
                        <button type="button" name="btn-search" id="btn-search" class="btn btn-primary btn-search"><span
                                class="flaticon-tools-and-utensils icons search-icon"></span></button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-11">
                    <div class="row">
                        <audio-file></audio-file>
                    </div>
                </div>
                <div class="col-1">
                    <share-social></share-social>
                </div>
            </div>

        </div>



    </div>

</div>
@endsection